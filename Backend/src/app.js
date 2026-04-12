import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import postRoutes from "./routes/post.routes.js";
import commentRoutes from "./routes/comment.routes.js";
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://appfiylab-job-task-bsb8.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, origin);
    } else {
      return callback(new Error("CORS blocked"));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

export default app;

// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";

// import authRoutes from "./routes/auth.routes.js";
// import postRoutes from "./routes/post.routes.js";
// import commentRoutes from "./routes/comment.routes.js";

// const app = express();

// /**
//  * ✅ CORS CONFIG (FIXED)
//  * - no trailing slash
//  * - supports local + deployed frontend
//  */
// const allowedOrigins = ["http://localhost:5173"];

// app.use((req, res, next) => {
//   const origin = req.headers.origin;

//   if (allowedOrigins.includes(origin)) {
//     res.setHeader("Access-Control-Allow-Origin", origin);
//   }

//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PUT, DELETE, OPTIONS"
//   );

//   if (req.method === "OPTIONS") {
//     return res.sendStatus(200);
//   }

//   next();
// });
// /**
//  * ✅ MIDDLEWARES
//  */
// app.use(express.json());
// app.use(cookieParser());

// /**
//  * ✅ HEALTH CHECK ROUTE (IMPORTANT FOR INTERVIEW)
//  */
// app.get("/", (req, res) => {
//   res.send("API is running 🚀");
// });

// /**
//  * ✅ ROUTES
//  */
// app.use("/api/auth", authRoutes);
// app.use("/api/posts", postRoutes);
// app.use("/api/comments", commentRoutes);

// /**
//  * ❌ 404 HANDLER (CLEAN)
//  */
// app.use((req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Route not found"
//   });
// });

// /**
//  * ❌ GLOBAL ERROR HANDLER (VERY IMPORTANT)
//  */
// app.use((err, req, res, next) => {
//   console.error("Error:", err.message);

//   res.status(500).json({
//     success: false,
//     message: err.message || "Internal Server Error"
//   });
// });

// export default app;