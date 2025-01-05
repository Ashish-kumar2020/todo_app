import React, { useState, useEffect } from "react";
import NotificationIcon from "../assets/Notifications.png";
import CalendarIcon from "../assets/CalenderIcon.png";
import SearchIcon from "../assets/SearchICon.png";

const Header = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDay = days[currentDate.getDay()];

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="w-full h-[100px] bg-headerBgColor flex items-center justify-between px-10 shadow-md overflow-x-hidden">
      {/* Logo */}
      <h1 className="text-[32px] font-montserrat font-semibold">
        <span className="text-customRed">Up</span>
        <span className="text-black">Next</span>
      </h1>

      {/* Search Bar (hidden on mobile) */}
      <div className="flex items-center bg-white shadow-md pl-4 py-2 w-[645px] h-[36px] rounded-[9px] hidden md:flex">
        <input
          type="text"
          placeholder="Search your task here..."
          className="w-full text-sm text-SearchColor outline-none "
        />
        <button className="bg-customRed text-white w-[36px] h-[36px] rounded-[9px]">
          <img src={SearchIcon} alt="SearchIcon" />
        </button>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4">
        <div className="w-[34px] h-[34px] bg-customRed flex items-center justify-center rounded-[15px]">
          <img src={NotificationIcon} alt="Notification Icon" />
        </div>
        <div className="w-[34px] h-[34px] bg-customRed flex items-center justify-center rounded-[15px]">
          <img src={CalendarIcon} alt="Calendar Icon" />
        </div>
        <div className="text-right">
          <h1 className="text-[15px] font-semibold text-gray-800">
            {currentDay}
          </h1>
          <p className="text-[14px] text-DateColor">
            {formatDate(currentDate)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
