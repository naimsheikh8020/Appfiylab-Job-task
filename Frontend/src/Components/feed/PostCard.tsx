import { useState } from "react";
import timeLineImg from "../../assets/timeline_img.png";

import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";



export type Reply = {
  id: number;
  name: string;
  text: string;
};

export type Comment = {
  id: number;
  name: string;
  text: string;
  likes: number;
  replies?: Reply[];
};

type Post = {
  id: number;
  author: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: Comment[];
};



const PostCard = ({ post }: { post: Post }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 space-y-4">

      <PostHeader author={post.author} time={post.time} />

      <p className="text-sm">{post.content}</p>

      <img
        src={post.image || timeLineImg}
        className="w-full h-[300px] object-cover rounded-lg"
      />

      <PostActions liked={liked} likes={likes} onLike={handleLike} />

      <CommentInput />

      <p className="text-xs text-gray-500 cursor-pointer">
        View previous comments
      </p>

      {post.comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}

      <CommentInput />
    </div>
  );
};

export default PostCard;