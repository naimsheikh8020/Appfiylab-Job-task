import Avatar from "../../assets/people1.png";

const YouMightLike = () => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">
          You Might Like
        </h3>
        <button className="text-sm text-blue-500 font-medium">
          See All
        </button>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-100 mb-4"></div>

      {/* USER */}
      <div className="flex items-center gap-3 mb-5">
        <img
          src={Avatar}
          alt="user"
          className="w-12 h-12 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-semibold text-gray-800">
            Radovan SkillArena
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Founder & CEO at Trophy
          </p>
        </div>
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-3">
        
        {/* IGNORE */}
        <button className="flex-1 border border-gray-200 text-gray-600 py-2 rounded-lg text-sm hover:bg-gray-50 transition">
          Ignore
        </button>

        {/* FOLLOW */}
        <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm hover:bg-blue-600 transition">
          Follow
        </button>

      </div>

    </div>
  );
};

export default YouMightLike;