import MainLayout from "../Components/layout/MainLayout";
import Stories from "../Components/feed/Stories";
import CreatePost from "../Components/feed/CreatePost";
import PostCard from "../Components/feed/PostCard";
import { usePosts } from "../hooks/usePosts";
import { useAuthStore } from "../store/auth.store";
import { useLogout } from "../hooks/useLogout";

const Feed = () => {
  const { data, isLoading } = usePosts();
  const user = useAuthStore((s) => s.user);
  const { handleLogout } = useLogout();

  if (isLoading) return <div>Loading...</div>;

  return (
    <MainLayout>
      <div className="space-y-6">

        {/* 🔥 HEADER */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Feed</h2>

          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        <Stories />
        <CreatePost />

        {data?.posts?.map((post: any) => (
          <PostCard
            key={post._id}
            post={{
              id: post._id,
              author: `${post.author.firstName} ${post.author.lastName}`,
              time: new Date(post.createdAt).toLocaleString(),
              content: post.content,
              image: post.image,
              likes: post.likeCount ?? 0,
              comments: post.comments || [],
              liked: post.likedBy?.some(
                (u: any) => u._id === user?.id
              ),
            }}
          />
        ))}

      </div>
    </MainLayout>
  );
};

export default Feed;