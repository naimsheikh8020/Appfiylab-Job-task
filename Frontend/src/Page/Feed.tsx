import MainLayout from "../Components/layout/MainLayout";
import Stories from "../Components/feed/Stories";
import CreatePost from "../Components/feed/CreatePost";
import PostCard from "../Components/feed/PostCard";

const Feed = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <Stories />
        <CreatePost />
        <PostCard />
        <PostCard />
      </div>
    </MainLayout>
  );
};

export default Feed;