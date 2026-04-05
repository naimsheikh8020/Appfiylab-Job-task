import {
  Search,
  Home,
  Users,
  Bell,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

import logo from "../../assets/logo.svg";
import avatar from "../../assets/Avatar.png";

const Navbar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-100 px-10 h-16 flex items-center justify-around  py-10 shadow sticky top-0 z-50">

      {/* LEFT */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-7" />
      </div>

      {/* CENTER */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-full px-5 h-10 w-105">
        <Search className="w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="input search text"
          className="bg-transparent outline-none ml-2 w-full text-sm text-gray-600 placeholder-gray-400"
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-8">

        {/* HOME (ACTIVE) */}
        <div className="relative flex flex-col items-center justify-center">
          <Home className="w-5 h-5 text-blue-500" />
          <span className="absolute -bottom-[20px] w-6 h-0.5 bg-blue-500 rounded-full"></span>
        </div>

        {/* USERS */}
        <Users className="w-5 h-5 text-gray-500" />

        {/* NOTIFICATION */}
        <div className="relative">
          <Bell className="w-5 h-5 text-gray-500" />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            6
          </span>
        </div>

        {/* MESSAGE */}
        <div className="relative">
          <MessageCircle className="w-5 h-5 text-gray-500" />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </div>

        {/* PROFILE */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={avatar}
            alt="user"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm font-medium text-gray-700">
            Dylan Field
          </span>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;