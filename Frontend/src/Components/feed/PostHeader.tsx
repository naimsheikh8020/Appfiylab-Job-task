import { MoreVertical } from "lucide-react";
import postProfileImg from "../../assets/post_img.png";

const PostHeader = ({ author, time }: { author: string; time: string }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={postProfileImg} className="w-10 h-10 rounded-full" />
        <div>
          <p className="text-sm font-semibold">{author}</p>
          <p className="text-xs text-gray-400">{time}</p>
        </div>
      </div>
      <MoreVertical className="w-4 h-4 text-gray-400" />
    </div>
  );
};

export default PostHeader;