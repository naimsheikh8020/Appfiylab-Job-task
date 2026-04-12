import api from "./axios";

export const createPostApi = async (formData: FormData) => {
  const res = await api.post("/api/posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const getPostsApi = async () => {
  const res = await api.get("/api/posts");
  return res.data;
};

export const toggleLikeApi = async (postId: string) => {
  const res = await api.put(`/api/posts/${postId}/like`);
  return res.data;
};