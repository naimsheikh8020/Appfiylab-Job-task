import MainLayout from "../Components/layout/MainLayout";
import Stories from "../Components/feed/Stories";
import CreatePost from "../Components/feed/CreatePost";
import PostCard from "../Components/feed/PostCard";
import { useLogout } from "../hooks/useLogout";

const postData = {
  id: 1,
  author: "Karim Saif",
  time: "5 minute ago · Public",
  content: "-Healthy Tracking App",
  image: "",
  likes: 9,
  comments: [
    {
      id: 1,
      name: "Radovan",
      text: "Nice UI bro",
      likes: 198,
      replies: [
        { id: 2, name: "Karim", text: "Thanks 🔥" },
      ],
    },
  ],
};


const Feed = () => {
  const { handleLogout } = useLogout();
  return (
    <MainLayout>
      <div className="space-y-6">
        <Stories />
        <CreatePost />
        <PostCard post={postData} />;

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


