import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../assets/profile.png";
import { toggleVisibility } from "../slice/visibilitySlice";
const SideNav = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const navItems = [
    { id: "Dashboard", label: "Dashboard" },
    { id: "Vital Task", label: "Vital Task" },
    { id: "My Task", label: "My Task" },
    { id: "Task Categories", label: "Task Categories" },
    { id: "Settings", label: "Settings" },
    { id: "Help", label: "Help" },
  ];

  // const isSideNavVisible = useSelector((state) => state.visibility.isVisible);
  const dispatch = useDispatch();
  return (
    <div className="w-[315px] h-[100vh] bg-customRed rounded-tr-[10px] rounded-br-[10px]">
      {/* Profile image */}
      <div className="relative left-[107px] top-[20px]">
        <img src={Profile} alt="Profile" />
      </div>
      {/* User Details */}
      <div className="relative left-[74px] w-[176px] h-[36px] top-[30px]">
        <h1 className="text-[16px] font-bold text-white">Ashish Kumar Singh</h1>
        <h1 className="text-[12px] text-white">ashishsingh@upnext.com</h1>
      </div>

      {/* Navigation List */}
      <ul className="relative top-[50px]">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              setActiveItem(item.id);
              dispatch(toggleVisibility());
            }}
            className={`w-[258px] h-[59px] ml-[21px] cursor-pointer text-[16px] font-inter mb-[12px] flex items-center rounded-[15px] ${
              activeItem === item.id ? "bg-white text-customRed" : "text-white"
            }`}
          >
            {" "}
            <span className="ml-[16px]">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
