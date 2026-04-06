import api from "./axios";

export const createPostApi = async (formData: FormData) => {
  const res = await api.post("/posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};