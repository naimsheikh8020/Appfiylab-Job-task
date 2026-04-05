import Post from "../models/post.model.js";
import Comment from "../models/comment.model.js";


// 🔥 CREATE POST
export const createPost = async (req, res) => {
  try {
    const { content, visibility } = req.body;

    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }

    const image = req.file ? req.file.path : null;

    const post = await Post.create({
      content,
      image,
      visibility,
      author: req.user.id,
    });

    const populatedPost = await post.populate(
      "author",
      "firstName lastName email"
    );

    res.status(201).json({
      ...populatedPost.toObject(),
      likeCount: 0,
      likedBy: [],
      commentCount: 0,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// 🔥 GET FEED (FULL FINAL)
export const getFeed = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const query = {
      $or: [
        { visibility: "public" },
        { author: req.user.id },
      ],
    };

    // 🔹 POSTS
    const posts = await Post.find(query)
      .populate("author", "firstName lastName email")
      .populate("likes", "firstName lastName")
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    const postIds = posts.map((p) => p._id);

    // 🔹 COMMENTS
    const comments = await Comment.find({
      post: { $in: postIds },
    })
      .populate("author", "firstName lastName")
      .populate("replyTo", "firstName lastName")
      .populate("likes", "firstName lastName")
      .sort({ createdAt: -1 })
      .lean();

    const commentMap = {};
    const postComments = {};

    // 🔹 PREPARE COMMENTS
    comments.forEach((c) => {
      c.replies = [];

      // ✅ likedBy for comment
      c.likedBy = (c.likes || []).map(user => ({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName
      }));

      c.likeCount = c.likes?.length || 0;

      commentMap[c._id] = c;

      if (!c.parent) {
        if (!postComments[c.post]) postComments[c.post] = [];
        postComments[c.post].push(c);
      }
    });

    // 🔹 ATTACH REPLIES
    comments.forEach((c) => {
      if (c.parent) {
        const parent = commentMap[c.parent];
        if (parent) {
          parent.replies.push({
            ...c,

            // ✅ likedBy for reply
            likedBy: (c.likes || []).map(user => ({
              _id: user._id,
              firstName: user.firstName,
              lastName: user.lastName
            })),

            likeCount: c.likes?.length || 0,
          });
        }
      }
    });

    // 🔹 FINAL POST STRUCTURE
    posts.forEach((post) => {
      const commentsList = postComments[post._id] || [];

      // ✅ likedBy for post
      post.likedBy = (post.likes || []).map(user => ({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName
      }));

      post.likeCount = post.likes?.length || 0;
      post.commentCount = commentsList.length;

      post.comments = commentsList.map((comment) => ({
        ...comment,
        replyCount: comment.replies.length,
      }));

      // 🧹 clean
      delete post.likes;
    });

    const total = await Post.countDocuments(query);

    res.json({
      posts,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalPosts: total,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// 🔥 LIKE / UNLIKE POST
export const toggleLikePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    const userId = req.user.id;

    const isLiked = post.likes.some(
      (id) => id.toString() === userId
    );

    if (isLiked) {
      post.likes = post.likes.filter(
        (id) => id.toString() !== userId
      );
    } else {
      post.likes.push(userId);
    }

    await post.save();

    const updatedPost = await post.populate([
      { path: "author", select: "firstName lastName email" },
      { path: "likes", select: "firstName lastName" },
    ]);

    res.json({
      ...updatedPost.toObject(),
      likedBy: updatedPost.likes.map(user => ({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName
      })),
      likeCount: updatedPost.likes.length,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};