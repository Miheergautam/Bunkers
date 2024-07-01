import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Img from "../../assets/images/SignIn.jpg";
import Heading from "../components/SignIn-SignUp/Heading";
import SubHeading from "../components/SignIn-SignUp/SubHeading";
import InputBox from "../components/SignIn-SignUp/InputBox";
import PasswordBox from "../components/SignIn-SignUp/PasswordBox";
import SubmitButton from "../components/SignIn-SignUp/SubmitButton";
import BottomHeading from "../components/SignIn-SignUp/BottomHeading";
import { FaArrowLeft } from "react-icons/fa";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = () => {
    // Call API to sign in user
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center w-0.8 lg:w-3/4 border border-deep-teal shadow-2xl rounded-xl overflow-hidden">
        <div className="hidden lg:block lg:w-1/2">
          <img src={Img} alt="SignIn Image" className="" />
        </div>
        <div className="w-full lg:w-3/4 flex flex-col justify-center items-center p-4">
          <FaArrowLeft
            className="absolute top-4 left-4 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <Heading label="Sign In" />
          <SubHeading label="Please sign in to your account." />
          <InputBox
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <PasswordBox
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <SubmitButton label="Sign In" onClick={handleSignIn} />
          <BottomHeading
            label="Don't have an account? "
            to="/sign-up"
            locationtxt="Sign Up"
          />
        </div>
      </div>
    </div>
  );
}
