import MainLayout from "../Components/layout/MainLayout";
import Stories from "../Components/feed/Stories";
import CreatePost from "../Components/feed/CreatePost";
import PostCard from "../Components/feed/PostCard";
import { useLogout } from "../hooks/useLogout";
import { usePosts } from "../hooks/usePosts";

const Feed = () => {
  const { handleLogout } = useLogout();
  const { data, isLoading } = usePosts();

  if (isLoading) {
    return <div>Loading posts...</div>;
  }

  return (
    <MainLayout>
      <div className="space-y-6">

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
              likes: post.likeCount,
              comments: [], // simplify for now
            }}
          />
        ))}

      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </MainLayout>
  );
};

export default Feed;