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

export default function SignUp() {
  const [state, setState] = useState(1);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Call API to register user
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
            onClick={() =>
              state === 1
                ? navigate("/")
                : state === 2
                ? setState(1)
                : navigate("sign-in")
            }
          />
          <Heading label="Sign Up" />
          <SubHeading label="Please sign up to create your account." />
          {state === 1 && (
            <InputBox
              label="Firstname"
              type="text"
              onChange={(e) => setFirstname(e.target.value)}
              placeholder="Enter your firstname"
            />
          )}
          {state === 1 && (
            <InputBox
              label="Lastname"
              type="text"
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Enter your lastname"
            />
          )}
          {state === 1 && (
            <SubmitButton label="Next" onClick={() => setState(2)} />
          )}

          {state === 2 && (
            <InputBox
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          )}
          {state === 2 && (
            <PasswordBox
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          )}
          {state === 2 && (
            <PasswordBox
              label="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Enter your password"
            />
          )}

          {state === 2 && (
            <SubmitButton label="Next" onClick={() => setState(3)} />
          )}
          <BottomHeading
            label="Already have an account?"
            to="/sign-in"
            locationtxt="Sign In"
          />
        </div>
      </div>
    </div>
  );
}
