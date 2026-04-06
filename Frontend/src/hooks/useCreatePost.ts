import { useMutation } from "@tanstack/react-query";
import { createPostApi } from "../api/post.api";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: createPostApi,

    onSuccess: (data) => {
      console.log("Post created:", data);
    },

    onError: (err: any) => {
      alert(err?.response?.data?.message || "Post failed");
    },
  });
};