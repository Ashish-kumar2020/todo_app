import React, { useState } from "react";
import BackgroundImg from "../assets/background.png";
import Character from "../assets/signupCharacter.png";
import FirstName from "../assets/firstName-icon.png";
import LastNameIcon from "../assets/LastNameIcon.png";
import UserIcon from "../assets/User_icon.png";
import EmailIcon from "../assets/Email_icon.png";
import PasswordIcon from "../assets/password_icon.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setuserName] = useState("");

  const navigate = useNavigate();
  const submitSignUpData = async () => {
    try {
      const data = {
        email,
        password,
        firstName,
        lastName,
        userName,
      };
      console.log(data);
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/signup",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        navigate("/login");
      }
      console.log("Response :", response.data);
      setPassword("");
      setFirstName("");
      setLastName("");
      setuserName("");
    } catch (error) {
      console.error(
        "Error during signup:",
        error.response?.data || error.message
      );
      alert("Signup Failed! Please try again.");
    }
  };
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        className="absolute w-full h-full object-cover bg-customRed"
        src={BackgroundImg}
        alt="Background"
      />

      {/* Signup Card */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[80%] lg:w-[1236px] lg:h-[627px] bg-white shadow-lg rounded-2xl flex flex-col lg:flex-row">
        {/* Left Section (Character Illustration) */}
        <div className="hidden lg:flex items-end justify-start w-full lg:w-1/2 relative">
          <img
            className="w-[363px] h-[462px] absolute bottom-4 left-4"
            src={Character}
            alt="Signup Illustration"
          />
        </div>

        {/* Right Section (Signup Form) */}
        <div className="w-full lg:w-1/2 p-6 lg:p-10">
          <h1 className="text-[28px] md:text-[36px] font-bold text-signupFontColor font-montserrat">
            Sign Up
          </h1>

          {/* Input Fields */}
          {[
            {
              label: "Enter First Name",
              icon: FirstName,
              value: firstName,
              setValue: setFirstName,
            },
            {
              label: "Enter Last Name",
              icon: LastNameIcon,
              value: lastName,
              setValue: setLastName,
            },
            {
              label: "Enter Username",
              icon: UserIcon,
              value: userName,
              setValue: setuserName,
            },
            {
              label: "Enter Email",
              icon: EmailIcon,
              value: email,
              setValue: setEmail,
            },
            {
              label: "Enter Password",
              icon: PasswordIcon,
              value: password,
              setValue: setPassword,
            },
          ].map((field, index) => (
            <div className="relative mt-5" key={index}>
              <input
                type={field.label === "Enter Password" ? "password" : "text"}
                placeholder={field.label}
                className="w-full h-[50px] pl-10 border border-gray-300 rounded-md text-sm md:text-base text-inputFontColor font-montserrat focus:outline-none focus:ring-2 focus:ring-customRed"
                required
                aria-label={field.label}
                value={field.value}
                onChange={(e) => field.setValue(e.target.value)}
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
              className="text-signupFontColor font-montserrat text-sm md:text-base text-gray-600"
            >
              I agree to all terms
            </label>
          </div>

          {/* Submit Button */}
          <div className="mt-5">
            <Stack spacing={2} direction="row">
              <Button
                className="w-full h-[50px] text-white font-bold"
                variant="contained"
                style={{
                  backgroundColor: "#FF9090",
                  borderRadius: "5px",
                  fontFamily: "Montserrat",
                }}
                onClick={submitSignUpData}
              >
                Register
              </Button>
            </Stack>
          </div>

          {/* Already Have an Account */}
          <div className="mt-5 text-center lg:text-left text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-customRed font-bold">
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
