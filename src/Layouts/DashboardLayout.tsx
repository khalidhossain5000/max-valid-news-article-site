import React from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <div className="w-full overflow-x-hidden">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
