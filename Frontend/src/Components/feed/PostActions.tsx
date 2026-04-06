import { MessageCircle, Share2, ThumbsUp } from "lucide-react";

type Props = {
  liked: boolean;
  likes: number;
  onLike: () => void;
};

const PostActions = ({ liked, likes, onLike }: Props) => {
  return (
    <>
      {/* COUNT */}
      <div className="flex justify-between text-sm text-gray-500">
        <span>{liked ? `You and ${likes} others` : `${likes} Likes`}</span>
        <div className="flex gap-4">
          <span>12 Comment</span>
          <span>122 Share</span>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="flex justify-between  p-3 text-base">
        <button
          onClick={onLike}
          className={`flex items-center gap-2 ${
            liked ? "text-blue-500" : "text-gray-600"
          }`}
        >
          <ThumbsUp
            className={`w-4 h-4 ${
              liked ? "fill-blue-500 text-blue-500" : ""
            }`}
          />
          Like
        </button>

        <button className="flex items-center gap-2 text-gray-600">
          <MessageCircle className="w-4 h-4" />
          Comment
        </button>

        <button className="flex items-center gap-2 text-gray-600">
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>
    </>
  );
};

export default PostActions;