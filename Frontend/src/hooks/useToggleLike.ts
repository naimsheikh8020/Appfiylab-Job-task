import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleLikeApi } from "../api/post.api";
import { useAuthStore } from "../store/auth.store";

export const useToggleLike = () => {
  const queryClient = useQueryClient();
  const user = useAuthStore.getState().user;

  return useMutation({
    mutationFn: toggleLikeApi,

    onMutate: async (postId: string) => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      const previousData = queryClient.getQueryData<any>(["posts"]);

      queryClient.setQueryData(["posts"], (old: any) => {
        if (!old) return old;

        return {
          ...old,
          posts: old.posts.map((post: any) => {
            if (post._id !== postId) return post;

            const isLiked = post.likedBy?.some(
              (u: any) => u._id === user?.id
            );

            return {
              ...post,
              likeCount: isLiked
                ? post.likeCount - 1
                : post.likeCount + 1,
              likedBy: isLiked
                ? post.likedBy.filter(
                    (u: any) => u._id !== user?.id
                  )
                : [...(post.likedBy || []), { _id: user?.id }],
            };
          }),
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