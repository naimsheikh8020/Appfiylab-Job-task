import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String, // Cloudinary URL
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    visibility: {
      type: String,
      enum: ["public", "private"],
      default: "public",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);


// 🔥 INDEXES (PERFORMANCE)

// For sorting feed (newest first)
postSchema.index({ createdAt: -1 });

// For fetching user-specific posts
postSchema.index({ author: 1 });

// For filtering public/private posts
postSchema.index({ visibility: 1 });

// 🔥 ADVANCED (optional but powerful)
// Combined index for feed queries
postSchema.index({ visibility: 1, createdAt: -1 });

const Post = mongoose.model("Post", postSchema);

export default Post;