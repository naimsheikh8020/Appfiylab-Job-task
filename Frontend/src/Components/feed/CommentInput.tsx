import commentImg from "../../assets/comment_img.png";

const CommentInput = () => {
  return (
    <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
      <img src={commentImg} className="w-8 h-8 rounded-full" />
      <input
        placeholder="Write a comment"
        className="bg-transparent outline-none w-full text-sm"
      />
    </div>
  );
};

export default CommentInput;