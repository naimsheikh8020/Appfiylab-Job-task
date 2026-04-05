import rateLimit from "express-rate-limit";

// login limiter (STRICT)
export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many login attempts. Try again later.",
});

// register limiter
export const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 10,
});