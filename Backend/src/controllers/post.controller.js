import Post from "../models/post.model.js";

// CREATE POST
export const createPost = async (req, res) => {
  try {
    const { content, image, visibility } = req.body;

    const post = await Post.create({
      content,
      image,
      visibility,
      author: req.user.id,
    });

    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET FEED
export const getFeed = async (req, res) => {
  try {
    const posts = await Post.find({
      $or: [
        { visibility: "public" },
        { author: req.user.id },
      ],
    })
      .populate("author", "firstName lastName")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// LIKE / UNLIKE
export const toggleLikePost = async (req, res) => {
  const post = await Post.findById(req.params.id);

  const userId = req.user.id;

  const isLiked = post.likes.includes(userId);

  if (isLiked) {
    post.likes = post.likes.filter(id => id.toString() !== userId);
  } else {
    post.likes.push(userId);
  }

  await post.save();

  res.json(post);
};