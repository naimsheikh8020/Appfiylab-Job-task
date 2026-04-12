import api from "./axios";

export const createCommentApi = async ({
  postId,
  content,
  parentId,
  replyTo,
}: {
  postId: string;
  content: string;
  parentId?: string | null;
  replyTo?: string | null;
}) => {
  const res = await api.post(`/api/comments/${postId}`, {
    content,
    parentId: parentId || null,
    replyTo: replyTo || null,
  });

  return res.data;
};

export const toggleCommentLikeApi = async (commentId: string) => {
  const res = await api.put(`/api/comments/${commentId}/like`);
  return res.data;
};