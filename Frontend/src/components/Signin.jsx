import React from "react";
import { Mail, Lock } from "lucide-react";
import BackgroundImg from "../assets/background.png";
import SignInCharacter from "../assets/SigninCharacter.png";

import EmailIcon from "../assets/Email_icon.png";
import PasswordIcon from "../assets/password_icon.png";

const Signin = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background */}
      <div className="absolute w-full h-full bg-[#FF9090] bg-opacity-20" />
      <img
        className="absolute w-full h-full object-cover bg-customRed"
        src={BackgroundImg}
        alt="Background"
      />
      {/* Main Card */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%] lg:w-[1236px] lg:h-[627px] bg-white shadow-lg rounded-2xl flex flex-col lg:flex-row">
        {/* Left Section (Illustration) */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10 ">
          <h1 className="text-[28px] md:text-[36px] font-bold text-gray-900 mb-8">
            Sign In
          </h1>

          {/* Input Fields */}

          {[
            { label: "Enter Email", icon: EmailIcon },
            { label: "Enter Password", icon: PasswordIcon },
          ].map((field, index) => (
            <div className="relative mt-5" key={index}>
              <input
                type="text"
                placeholder={field.label}
                className="w-full h-[50px] pl-10 border border-gray-300 rounded-md text-sm md:text-base text-inputFontColor font-montserrat focus:outline-none focus:ring-2 focus:ring-customRed"
                required
                aria-label={field.label}
              />
              <img
                src={field.icon}
                alt={`${field.label} Icon`}
                className="absolute left-3 top-[12px] w-6 h-6"
              />
            </div>
          ))}

          {/* Terms Checkbox */}
          <div className="mt-5 flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="w-[18px] h-[18px] mr-2"
            />
            <label
              htmlFor="terms"
              className="text-signupFontColor text-sm md:text-base"
            >
              I agree to all terms
            </label>
          </div>

          {/* Sign In Button */}
          <button className="mt-5 w-full h-[50px] bg-[#FF9090] hover:bg-[#FF7070] text-white font-bold rounded-md transition duration-200">
            Sign In
          </button>

          {/* Sign Up Link */}
          <div className="mt-5 text-center lg:text-left text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-customRed font-bold">
              Sign up
            </a>
          </div>
        </div>

        {/* Right Section (Sign In) */}
        <div className="hidden lg:flex items-center justify-center w-full lg:w-1/2 bg-[#F8F9FF] p-8">
          <img
            className="w-full max-w-md"
            src={SignInCharacter}
            alt="SignIn Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
