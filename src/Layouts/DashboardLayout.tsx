import { Outlet } from "react-router";
import Sidebar from "../Components/Dashboard/DashboardSidebar/DashboardSidebar";
import MobileSidebar from "../Components/Dashboard/DashboardSidebar/MobileSidebar";


const DashboardLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* desktop sidebar*/}
      <Sidebar />

      {/* right side*/}
      <div className="flex flex-1 flex-col overflow-y-auto">
        {/* mobile-only topbar */}
        <header className="flex items-center border-b border-gray-100 bg-white px-4 py-3 lg:hidden">
          <MobileSidebar />
        </header>

        <main className="flex-1 overflow-x-hidden p-2 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;