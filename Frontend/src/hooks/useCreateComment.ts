import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCommentApi } from "../api/comment.api";

export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createCommentApi,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};