import timeLineImg from "../../assets/timeline_img.png";
import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";
import { useToggleLike } from "../../hooks/useToggleLike";

type Reply = {
  id: string;
  name: string;
  text: string;
};

type Comment = {
  id: string;
  name: string;
  text: string;
  likes: number;
  replies?: Reply[];
};

type Post = {
  id: string;
  author: string;
  time: string;
  content: string;
  image?: string;
  likes: number;
  comments: any[]; // raw backend comments
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

      {/* HEADER */}
      <PostHeader author={post.author} time={post.time} />

      {/* CONTENT */}
      <p className="text-sm">{post.content}</p>

      {/* IMAGE */}
      <img
        src={post.image || timeLineImg}
        className="w-full h-[300px] object-cover rounded-lg"
      />

      {/* ACTIONS */}
      <PostActions
        liked={post.liked}
        likes={post.likes}
        onLike={handleLike}
      />

      {/* ADD COMMENT */}
      <CommentInput postId={post.id} />

      {/* VIEW COMMENTS */}
      <p className="text-xs text-gray-500 cursor-pointer">
        View previous comments
      </p>

      {/* COMMENTS LIST */}
      {post.comments?.map((comment: any) => (
        <CommentItem
          key={comment._id}
          postId={post.id}
          comment={{
            id: comment._id,
            name: `${comment.author.firstName} ${comment.author.lastName}`,
            text: comment.content,

            // 🔥 IMPORTANT FIX (ARRAY, not number)
            likes: comment.likes || [],

            authorId: comment.author._id,

            replies: comment.replies?.map((reply: any) => ({
              id: reply._id,
              name: `${reply.author.firstName} ${reply.author.lastName}`,
              text: reply.content,
            })),
          }}
        />
      ))}

      {/* ADD COMMENT AGAIN */}
      <CommentInput postId={post.id} />
    </div>
  );
};

export default PostCard;