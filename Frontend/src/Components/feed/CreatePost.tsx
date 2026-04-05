const CreatePost = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">

      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <input
          placeholder="Write something..."
          className="w-full bg-gray-100 rounded-full px-4 py-2 outline-none"
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-4 text-sm text-gray-600">
          <span>Photo</span>
          <span>Video</span>
          <span>Event</span>
          <span>Article</span>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Post
        </button>
      </div>

    </div>
  );
};

export default CreatePost;