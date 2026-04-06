import { useState } from "react";
import commentImg from "../../assets/comment_img.png";
import { useCreateComment } from "../../hooks/useCreateComment";

const CommentInput = ({
  postId,
  parentId = null,
  replyTo = null,
}: {
  postId: string;
  parentId?: string | null;
  replyTo?: string | null;
}) => {
  const [text, setText] = useState("");
  const { mutate } = useCreateComment();

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!text.trim()) return;

      mutate({
        postId,
        content: text,
        parentId,
        replyTo,
      });

      setText("");
    }
  };

  return (
    <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
      <img src={commentImg} className="w-8 h-8 rounded-full" />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleSubmit}
        placeholder="Write a comment"
        className="bg-transparent outline-none w-full text-sm"
      />
    </div>
  );
};

export default CommentInput;