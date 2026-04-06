import api from "./axios";

export const createPostApi = async (formData: FormData) => {
  const res = await api.post("/posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export const getPostsApi = async () => {
  const res = await api.get("/posts");
  return res.data;
};

export const toggleLikeApi = async (postId: string) => {
  const res = await api.put(`/posts/${postId}/like`);
  return res.data;
};