import { Compass, Users, Bookmark, Settings, ChartColumnIncreasing, UsersRound, Gamepad, Save } from "lucide-react";
import SuggestedPeople from "./SuggestedPeople";
// import stevejobs from "../../assets/people1.png"


const SidebarLeft = () => {
  return (
    <div className="space-y-6">

      <div className="bg-white p-4 rounded-xl shadow-sm">
        <h3 className="font-semibold mb-4">Explore</h3>

        <div className="space-y-6 text-gray-600 text-lg">
          <div className="flex items-center gap-3">
            <Compass size={18} /> Learning
          </div>
          <div className="flex items-center gap-3">
            <ChartColumnIncreasing  size={18} /> Insights
          </div>
          <div className="flex items-center gap-3">
            <Users size={18} /> Find Friends
          </div>
          <div className="flex items-center gap-3">
            <Bookmark size={18} /> Bookmarks
          </div>
          <div className="flex items-center gap-3">
            <UsersRound  size={18} /> Group
          </div>
          <div className="flex items-center gap-3">
            <Gamepad size={18} /> Gaming
          </div>
          <div className="flex items-center gap-3">
            <Settings size={18} /> Settings
          </div>
          <div className="flex items-center gap-3">
            <Save  size={18} /> Save Post
          </div>
        </div>
      </div>

      <SuggestedPeople />

    </div>
  );
};

export default SidebarLeft;