import express from "express";
import protect from "../middleware/auth.middleware.js";
import {
  createPost,
  getFeed,
  toggleLikePost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/", protect, createPost);
router.get("/", protect, getFeed);
router.put("/:id/like", protect, toggleLikePost);

export default router;