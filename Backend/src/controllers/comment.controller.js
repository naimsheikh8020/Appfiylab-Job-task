import Comment from "../models/comment.model.js";


// 🔥 ADD COMMENT OR REPLY
export const addComment = async (req, res) => {
  try {
    const { content, parentId, replyTo } = req.body;

    if (!content) {
      return res.status(400).json({ message: "Content required" });
    }

    const comment = await Comment.create({
      content,
      post: req.params.postId,
      author: req.user.id,
      parent: parentId || null,
      replyTo: replyTo || null,
    });

    // ✅ populate both author + replyTo
    const populated = await comment.populate([
      { path: "author", select: "firstName lastName" },
      { path: "replyTo", select: "firstName lastName" },
    ]);

    res.status(201).json(populated);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// 🔥 GET COMMENTS (with replyTo + likes count)
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      post: req.params.postId,
    })
      .populate("author", "firstName lastName")
      .populate("replyTo", "firstName lastName")
      .sort({ createdAt: -1 });

    res.json(comments);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



// 🔥 LIKE / UNLIKE COMMENT (also works for replies)
export const toggleLikeComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }

    const userId = req.user.id;

    const isLiked = comment.likes.some(
      (id) => id.toString() === userId
    );

    if (isLiked) {
      comment.likes = comment.likes.filter(
        (id) => id.toString() !== userId
      );
    } else {
      comment.likes.push(userId);
    }

    await comment.save();

    res.json({
      ...comment.toObject(),
      likeCount: comment.likes.length,
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};