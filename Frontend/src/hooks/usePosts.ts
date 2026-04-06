import { useQuery } from "@tanstack/react-query";
import { getPostsApi } from "../api/post.api";

export const usePosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPostsApi,
  });
};