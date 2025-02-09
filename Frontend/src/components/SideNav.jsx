import React, { useState } from "react";
import Profile from "../assets/profile.png";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
const SideNav = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const navItems = [
    { id: "Dashboard", label: "Dashboard" },
    { id: "CompletedTask", label: "Completed Task" },
    { id: "Backlog", label: "Backlog" },
    { id: "Notes", label: "Notes" },
    { id: "EditProfile", label: "Edit Profile" },
  ];

  return (
    <div className="w-[315px] h-[100%] bg-customRed rounded-tr-[10px] rounded-br-[10px]">
      <Stack direction="row" spacing={2}>
        <Avatar
          sx={{ bgcolor: deepPurple[500] }}
          style={{ marginLeft: "130px", marginTop: "30px" }}
        >
          AS
        </Avatar>
      </Stack>
      <div className="relative left-[74px] w-[176px] h-[36px] top-[30px]">
        <h1 className="text-[16px] font-bold text-white">Ashish Kumar Singh</h1>
        <h1 className="text-[12px] text-white">ashishsingh@upnext.com</h1>
      </div>
      <ul className="relative top-[50px]">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`w-[258px] h-[59px] ml-[21px] cursor-pointer text-[16px] font-inter mb-[12px] flex items-center rounded-[15px] ${
              activeItem === item.id ? "bg-white text-customRed" : "text-white"
            }`}
          >
            <Link
              to={`/body/${item.id}`}
              onClick={() => setActiveItem(item.id)}
            >
              <span className="ml-[16px]">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
