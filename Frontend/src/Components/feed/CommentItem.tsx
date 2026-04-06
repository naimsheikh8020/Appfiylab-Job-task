import commentImg from "../../assets/comment_img.png";
import { ThumbsUp } from "lucide-react";

type Reply = {
  id: number;
  name: string;
  text: string;
};
type Comment = {
  id: number;
  name: string;
  text: string;
  likes: number;
  replies?: Reply[];
};

const CommentItem = ({ comment }: { comment: Comment }) => {
  return (
    <div className="flex gap-3">
      <img src={commentImg} className="w-8 h-8 rounded-full" />

      <div className="flex-1">
        <div className="bg-gray-100 rounded-xl p-3">
          <p className="text-sm font-semibold">{comment.name}</p>
          <p className="text-xs text-gray-600 mt-1">{comment.text}</p>
        </div>

        {/* ACTIONS */}
        <div className="flex gap-4 text-xs text-gray-500 mt-1 ml-2">
          <span>Like</span>
          <span>Reply</span>
          <span>21m</span>
          <span className="flex items-center gap-1">
            <ThumbsUp className="w-3 h-3" /> {comment.likes}
          </span>
        </div>

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