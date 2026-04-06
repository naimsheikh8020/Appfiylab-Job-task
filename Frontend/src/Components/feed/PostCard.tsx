import {
  MoreVertical,
  MessageCircle,
  Share2,
  ThumbsUp,
} from "lucide-react";

import { useState } from "react";

import postProfileImg from "../../assets/post_img.png";
import timeLineImg from "../../assets/timeline_img.png";
import commentImg from "../../assets/comment_img.png";

const PostCard = () => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 space-y-4">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={postProfileImg} className="w-10 h-10 rounded-full" />
          <div>
            <p className="text-sm font-semibold">Karim Saif</p>
            <p className="text-xs text-gray-400">
              5 minute ago · Public
            </p>
          </div>
        </div>
        <MoreVertical className="w-4 h-4 text-gray-400" />
      </div>

      {/* CONTENT */}
      <p className="text-sm">-Healthy Tracking App</p>

      {/* IMAGE */}
      <img
        src={timeLineImg}
        className="w-full h-75 object-cover rounded-lg"
      />

      {/* LIKE COUNT */}
      <div className="flex justify-between text-sm text-gray-500">
        <span>{liked ? "You and 9 others" : "9 Likes"}</span>
        <div className="flex gap-4">
          <span>12 Comment</span>
          <span>122 Share</span>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex justify-between   p-3 text-sm">

        {/* LIKE */}
        <button
          onClick={() => setLiked(!liked)}
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

        {/* COMMENT */}
        <button className="flex items-center gap-2 text-gray-600">
          <MessageCircle className="w-4 h-4" />
          Comment
        </button>

        {/* SHARE */}
        <button className="flex items-center gap-2 text-gray-600">
          <Share2 className="w-4 h-4" />
          Share
        </button>
      </div>

      {/* COMMENT INPUT */}
      <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
        <img src={commentImg} className="w-8 h-8 rounded-full" />
        <input
          placeholder="Write a comment"
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

      {/* VIEW COMMENTS */}
      <p className="text-xs text-gray-500 cursor-pointer">
        View 4 previous comments
      </p>

      {/* COMMENT */}
      <div className="flex gap-3">
        <img src={commentImg} className="w-8 h-8 rounded-full" />

        <div className="flex-1">
          <div className="bg-gray-100 rounded-xl p-3">
            <p className="text-sm font-semibold">
              Radovan SkillArena
            </p>
            <p className="text-xs text-gray-600 mt-1">
              It is a long established fact that a reader will be distracted...
            </p>
          </div>

          {/* COMMENT ACTIONS */}
          <div className="flex gap-4 text-xs text-gray-500 mt-1 ml-2">
            <span>Like</span>
            <span>Reply</span>
            <span>21m</span>
            <span className="flex items-center gap-1">
              <ThumbsUp className="w-3 h-3" /> 198
            </span>
          </div>

          {/* NESTED REPLY */}
          <div className="flex gap-3 mt-3 ml-6">
            <img src={commentImg} className="w-7 h-7 rounded-full" />
            <div className="bg-gray-100 rounded-xl p-2">
              <p className="text-xs font-semibold">Karim Saif</p>
              <p className="text-xs text-gray-600">
                Nice work bro 🔥
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* COMMENT INPUT 2 */}
      <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
        <img src={commentImg} className="w-8 h-8 rounded-full" />
        <input
          placeholder="Write a comment"
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>

    </div>
  );
};

export default PostCard;