import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleCommentLikeApi } from "../api/comment.api";
import { useAuthStore } from "../store/auth.store";

export const useToggleCommentLike = () => {
  const queryClient = useQueryClient();
  const user = useAuthStore.getState().user;

  return useMutation({
    mutationFn: toggleCommentLikeApi,

    // 🔥 OPTIMISTIC UPDATE
    onMutate: async (commentId: string) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      const previousData = queryClient.getQueryData<any>(["posts"]);

      queryClient.setQueryData(["posts"], (old: any) => {
        if (!old) return old;

        return {
          ...old,
          posts: old.posts.map((post: any) => ({
            ...post,
            comments: post.comments.map((comment: any) => {
              if (comment._id !== commentId) return comment;

              const isLiked = comment.likes?.includes(user?._id);

              return {
                ...comment,
                likes: isLiked
                  ? comment.likes.filter((id: string) => id !== user?._id)
                  : [...(comment.likes || []), user?._id],
              };
            }),
          })),
        };
      });

      return { previousData };
    },

    onError: (_err, _id, context) => {
      queryClient.setQueryData(["posts"], context?.previousData);
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};