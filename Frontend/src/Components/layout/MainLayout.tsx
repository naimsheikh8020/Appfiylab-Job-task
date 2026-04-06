
import SidebarLeft from "../sidebar/SidebarLeft";
import SidebarRight from "../sidebar/SidebarRight";
import Navbar from "./Navbar";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* NAVBAR */}
      <Navbar />

      <div className="max-w-[1320px] mx-auto px-4 mt-6 grid grid-cols-12 gap-6 h-[calc(100vh-88px)]">
        <div className="hidden lg:block col-span-3 overflow-y-auto hide-scrollbar">
          <SidebarLeft />
        </div>

       
        <div className="col-span-12 lg:col-span-6 overflow-y-auto hide-scrollbar">
          {children}
        </div>

        {/* RIGHT - Independent Scroll */}
        <div className="hidden lg:block col-span-3 overflow-y-auto hide-scrollbar">
          <SidebarRight />
        </div>

      </div>
    </div>
  );
};

export default MainLayout;