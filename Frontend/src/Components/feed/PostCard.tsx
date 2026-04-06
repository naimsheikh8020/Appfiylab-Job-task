import timeLineImg from "../../assets/timeline_img.png";
import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";
import { useToggleLike } from "../../hooks/useToggleLike";

type Post = {
  id: string;
  author: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: any[];
  liked: boolean;
};

const PostCard = ({ post }: { post: Post }) => {
  const { mutate, isPending } = useToggleLike();

  const handleLike = () => {
    if (isPending) return;
    mutate(post.id);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-5 space-y-4">

      <PostHeader author={post.author} time={post.time} />

      <p className="text-sm">{post.content}</p>

      <img
        src={post.image || timeLineImg}
        className="w-full h-[300px] object-cover rounded-lg"
      />

      <PostActions
        liked={post.liked}
        likes={post.likes}
        onLike={handleLike}
      />

      <CommentInput />

      <p className="text-xs text-gray-500 cursor-pointer">
        View previous comments
      </p>

      {post.comments.map((comment: any) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}

      <CommentInput />
    </div>
  );
};

export default PostCard;