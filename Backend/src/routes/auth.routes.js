import express from "express";
import {
  registerUser,
  loginUser,
  refreshToken,
  logoutUser,
} from "../controllers/auth.controller.js";

import { loginLimiter, registerLimiter } from "../middleware/rateLimiter.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerLimiter, registerUser);
router.post("/login", loginLimiter, loginUser);

router.post("/refresh", refreshToken);
router.post("/logout", logoutUser);

router.get("/me", protect, (req, res) => {
  res.json({ user: req.user });
});

export default router;