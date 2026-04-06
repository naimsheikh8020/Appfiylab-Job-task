import { useState } from "react";
import commentImg from "../../assets/comment_img.png";
import { ThumbsUp } from "lucide-react";
import CommentInput from "./CommentInput";
import { useToggleCommentLike } from "../../hooks/useToggleCommentLike";
import { useAuthStore } from "../../store/auth.store";

type Reply = {
  id: string;
  name: string;
  text: string;
};

type Comment = {
  id: string;
  name: string;
  text: string;
  likes: string[];
  replies?: Reply[];
  authorId?: string;
};

const CommentItem = ({
  comment,
  postId,
}: {
  comment: Comment;
  postId: string;
}) => {
  const [showReply, setShowReply] = useState(false);

  const { mutate } = useToggleCommentLike();
  const user = useAuthStore((s) => s.user);

  const isLiked = comment.likes?.includes(user?._id);

  return (
    <div className="flex gap-3">
      {/* AVATAR */}
      <img src={commentImg} className="w-8 h-8 rounded-full" />

      <div className="flex-1">
        {/* COMMENT BOX */}
        <div className="bg-gray-100 rounded-xl p-3">
          <p className="text-sm font-semibold">{comment.name}</p>
          <p className="text-xs text-gray-600 mt-1">{comment.text}</p>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4 text-xs text-gray-500 mt-1 ml-2 items-center">

          {/* 🔥 LIKE BUTTON (FIXED UI) */}
          <button
            onClick={() => mutate(comment.id)}
            className={`flex items-center gap-1 font-medium transition transform ${
              isLiked
                ? "text-blue-500 scale-105"
                : "text-gray-500 hover:text-blue-500 hover:scale-105"
            }`}
          >
            <ThumbsUp
              className={`w-3 h-3 transition ${
                isLiked ? "fill-blue-500 text-blue-500" : ""
              }`}
            />
            Like
          </button>

          {/* REPLY BUTTON */}
          <button
            onClick={() => setShowReply((prev) => !prev)}
            className="hover:text-blue-500 transition"
          >
            Reply
          </button>

          <span>21m</span>

          {/* LIKE COUNT */}
          <span className="flex items-center gap-1">
            <ThumbsUp
              className={`w-3 h-3 ${
                isLiked ? "fill-blue-500 text-blue-500" : ""
              }`}
            />
            {comment.likes?.length || 0}
          </span>
        </div>

        {/* 🔥 REPLY INPUT */}
        {showReply && (
          <div className="mt-2 ml-6">
            <CommentInput
              postId={postId}
              parentId={comment.id}
              replyTo={comment.authorId}
            />
          </div>
        )}

        {/* REPLIES */}
        {comment.replies?.map((reply) => (
          <div key={reply.id} className="flex gap-3 mt-3 ml-6">
            <img src={commentImg} className="w-7 h-7 rounded-full" />
            <div className="bg-gray-100 rounded-xl p-2">
              <p className="text-xs font-semibold">{reply.name}</p>
              <p className="text-xs text-gray-600">{reply.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentItem;