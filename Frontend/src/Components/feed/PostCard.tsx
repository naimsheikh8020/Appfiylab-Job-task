const PostCard = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">

      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
        <div>
          <p className="font-medium text-sm">Karim Saif</p>
          <p className="text-xs text-gray-400">5 min ago</p>
        </div>
      </div>

      <p className="mb-3 text-sm">Healthy Tracking App</p>

      <div className="w-full h-[250px] bg-gray-200 rounded-lg"></div>

    </div>
  );
};

export default PostCard;