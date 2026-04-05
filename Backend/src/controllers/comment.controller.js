import Comment from "../models/comment.model.js";

// ADD COMMENT OR REPLY
export const addComment = async (req, res) => {
  try {
    const { content, parentId } = req.body;

    const comment = await Comment.create({
      content,
      post: req.params.postId,
      author: req.user.id,
      parent: parentId || null,
    });

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET COMMENTS
export const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({
      post: req.params.postId,
    })
      .populate("author", "firstName lastName")
      .sort({ createdAt: -1 });

    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// LIKE COMMENT
export const toggleLikeComment = async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  const userId = req.user.id;

  const isLiked = comment.likes.includes(userId);

  if (isLiked) {
    comment.likes = comment.likes.filter(id => id.toString() !== userId);
  } else {
    comment.likes.push(userId);
  }

  await comment.save();

  res.json(comment);
};