const SidebarRight = () => {
  return (
    <div className="space-y-6">

      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="font-semibold mb-4">You Might Like</h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-300 rounded-full" />
            <div>
              <p className="text-sm font-medium">Radovan</p>
              <p className="text-xs text-gray-400">CEO</p>
            </div>
          </div>
          <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
            Follow
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="font-semibold mb-4">Your Friends</h3>

        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-medium">Friend {i}</p>
              <p className="text-xs text-gray-400">Online</p>
            </div>
            <span className="w-2 h-2 bg-green-500 rounded-full" />
          </div>
        ))}
      </div>

    </div>
  );
};

export default SidebarRight;