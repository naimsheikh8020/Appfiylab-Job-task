import express from "express";
import protect from "../middleware/auth.middleware.js";
import {
  addComment,
  getComments,
  toggleLikeComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/:postId", protect, addComment);
router.get("/:postId", protect, getComments);
router.put("/:id/like", protect, toggleLikeComment);

export default router;