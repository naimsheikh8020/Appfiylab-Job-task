const Stories = () => {
  return (
    <div className="flex gap-4 overflow-x-auto">

      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="min-w-[120px] h-[160px] bg-gray-300 rounded-xl flex items-end p-2"
        >
          <span className="text-white text-sm">Story {i}</span>
        </div>
      ))}

    </div>
  );
};

export default Stories;