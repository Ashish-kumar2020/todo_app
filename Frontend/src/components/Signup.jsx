import React from "react";
import BackgroundImg from "../assets/background.png";
import Character from "../assets/signupCharacter.png";
import FirstName from "../assets/firstName-icon.png";
import LastNameIcon from "../assets/LastNameIcon.png";
import UserIcon from "../assets/User_icon.png";
import EmailIcon from "../assets/Email_icon.png";
import PasswordIcon from "../assets/password_icon.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Signup = () => {
  return (
    <div className="relative w-full h-screen">
      <img
        className="absolute w-full h-full object-cover bg-customRed"
        src={BackgroundImg}
        alt="Background"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1236px] h-[627px] bg-white shadow-lg rounded-2xl">
        <div className="flex items-center justify-center h-full">
          <img
            className="w-[363px] h-[462px] absolute bottom-0 left-0 mb-4 ml-4"
            src={Character}
            alt=""
          />
        </div>
      </div>

      {/* Signup Form */}
      <div className="absolute left-[660px] top-[83px] w-[559px] h-[582px] mt-[20px]">
        <span className="text-[36px] ml-[40px]  font-bold text-signupFontColor font-montserrat">
          Sign Up
        </span>
        {/* First Name container */}
        <div className="ml-[40px] mt-[20px]">
          <input
            type="text"
            placeholder="Enter First Name"
            className="text-[16px] w-[459px] h-[50px] p-[22px] pl-[50px] border-[1px] border-solid border-black rounded-[5px] text-[16px] text-inputFontColor font-montserrat"
            required
          />
          <img
            src={FirstName}
            alt="icon"
            className="absolute left-[56px] top-[87px] w-6 h-6"
          />
        </div>

        {/* Last Name Container */}
        <div className="ml-[40px] mt-[20px]">
          <input
            type="text"
            placeholder="Enter Last Name"
            className="text-[16px] w-[459px] h-[50px] p-[22px] pl-[50px] border-[1px] border-solid border-black rounded-[5px] text-[16px] text-inputFontColor font-montserrat"
            required
          />
          <img
            src={LastNameIcon}
            alt="icon"
            className="absolute left-[56px] top-[156px] w-6 h-6"
          />
        </div>

        {/* User Name Container */}
        <div className="ml-[40px] mt-[20px]">
          <input
            type="text"
            placeholder="Enter Username"
            className="text-[16px] w-[459px] h-[50px] p-[22px] pl-[50px] border-[1px] border-solid border-black rounded-[5px] text-[16px] text-inputFontColor font-montserrat"
            required
          />
          <img
            src={UserIcon}
            alt="icon"
            className="absolute left-[56px] top-[226px] w-6 h-6"
          />
        </div>

        {/* Email Container */}
        <div className="ml-[40px] mt-[20px]">
          <input
            type="text"
            placeholder="Enter Email"
            className="text-[16px] w-[459px] h-[50px] p-[22px] pl-[50px] border-[1px] border-solid border-black rounded-[5px] text-[16px] text-inputFontColor font-montserrat"
            required
          />
          <img
            src={EmailIcon}
            alt="icon"
            className="absolute left-[56px] top-[297px] w-6 h-6"
          />
        </div>

        {/* Enter Password Container */}
        <div className="ml-[40px] mt-[20px]">
          <input
            type="text"
            placeholder="Enter Password"
            className="text-[16px] w-[459px] h-[50px] p-[22px] pl-[50px] border-[1px] border-solid border-black rounded-[5px] text-[16px] text-inputFontColor font-montserrat"
            required
          />
          <img
            src={PasswordIcon}
            alt="icon"
            className="absolute left-[56px] top-[366px] w-6 h-6"
          />
        </div>

        {/* Remember Me Container*/}
        <div className="ml-[40px] mt-[20px]">
          <input type="checkbox" name="" id="" className="w-[18px] h-[18px]" />
          <span className="relative text-signupFontColor font-montserrat top-[-4px] p-[22px] pl-[16px]">
            I agree to all terms
          </span>
        </div>

        <div className="ml-[40px] mt-[20px]">
          <Stack spacing={2} direction="row">
            <Button
              className="w-[129px] h-[60px] bg-customRed hover:bg-red-700"
              variant="contained"
              style={{ backgroundColor: "#FF9090" }}
            >
              Contained
            </Button>
          </Stack>
        </div>

        {/* Already have a account */}
        <div className="ml-[40px] mt-[20px]">
          <span>Already have a account? Signin</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
