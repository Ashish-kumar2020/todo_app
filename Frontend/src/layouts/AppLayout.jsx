import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import Header from "../components/Header";

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-200">
        {" "}
        <Header />
      </div>

      <div className="flex flex-1">
        <div className="bg-red-200">
          {" "}
          <SideNav />
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
