
import SidebarLeft from "../sidebar/SidebarLeft";
import SidebarRight from "../sidebar/SidebarRight";
import Navbar from "./Navbar";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-100 min-h-screen ">

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <div className="max-w-[1320px] mx-auto px-4 mt-6 grid grid-cols-12 gap-6">

        {/* LEFT */}
        <div className="hidden lg:block col-span-3">
          <SidebarLeft />
        </div>

        {/* CENTER */}
        <div className="col-span-12 lg:col-span-6">
          {children}
        </div>

        {/* RIGHT */}
        <div className="hidden lg:block col-span-3">
          <SidebarRight />
        </div>

      </div>
    </div>
  );
};

export default MainLayout;