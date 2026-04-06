import Avatar1 from "../../assets/people1.png";
import Avatar2 from "../../assets/people2.png";
import Avatar3 from "../../assets/people3.png";
import Avatar4 from "../../assets/chat_profile1.png";
import Avatar5 from "../../assets/chat2_img.png";
import Avatar6 from "../../assets/chat3_img.png";
import Avatar7 from "../../assets/chat4_img.png";
import Avatar8 from "../../assets/chat5_img.png";
import Avatar9 from "../../assets/chat6_img.png";

import { Search } from "lucide-react";

const YourFriends = () => {
  const friends = [
    { name: "Steve Jobs", role: "CEO of Apple", online: false, time: "5 minute ago", img: Avatar1 },
    { name: "Ryan Roslansky", role: "CEO of Linkedin", online: true, img: Avatar2 },
    { name: "Dylan Field", role: "CEO of Figma", online: true, img: Avatar3 },
    { name: "Steve Jobs", role: "CEO of Apple", online: false, time: "5 minute ago", img: Avatar4 },
    { name: "Ryan Roslansky", role: "CEO of Linkedin", online: true, img: Avatar5 },
    { name: "Dylan Field", role: "CEO of Figma", online: true, img: Avatar6 },
    { name: "Dylan Field", role: "CEO of Figma", online: true, img: Avatar7 },
    { name: "Dylan Field", role: "CEO of Figma", online: true, img: Avatar8 },
    { name: "Steve Jobs", role: "CEO of Apple", online: false, time: "5 minute ago", img: Avatar9 },
  ];

  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">

      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-semibold text-gray-800">
          Your Friends
        </h3>
        <button className="text-sm text-blue-500 font-medium">
          See All
        </button>
      </div>

      {/* SEARCH */}
      <div className="flex items-center bg-gray-100 rounded-full px-4 h-10 mb-7">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="input search text"
          className="bg-transparent outline-none ml-2 w-full text-sm"
        />
      </div>

      {/* LIST */}
      <div className="space-y-8">
        {friends.map((friend, i) => (
          <div key={i} className="flex items-center justify-between">

            {/* LEFT */}
            <div className="flex items-center gap-3">
              <img
                src={friend.img}
                alt={friend.name}
                className="w-10 h-10 rounded-full object-cover"
              />

              <div>
                <p className="text-base mb-2 font-semibold text-gray-800 leading-none">
                  {friend.name}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {friend.role}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            {friend.online ? (
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
            ) : (
              <p className="text-xs text-gray-400 whitespace-nowrap">
                {friend.time}
              </p>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default YourFriends;