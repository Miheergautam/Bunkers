import React, { useState } from 'react';
import Img from "../../assets/images/SignIn.jpg";
import Heading from "../components/SignIn-SignUp/Heading";
import SubHeading from "../components/SignIn-SignUp/SubHeading";
import InputBox from "../components/SignIn-SignUp/InputBox";
import PasswordBox from "../components/SignIn-SignUp/PasswordBox";
import SubmitButton from "../components/SignIn-SignUp/SubmitButton";
import BottomHeading from "../components/SignIn-SignUp/BottomHeading";

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log('Sign-In', { email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col lg:flex-row border border-neutral-500 rounded-xl overflow-hidden w-full max-w-4xl">
        <div className="hidden lg:block lg:w-1/2">
          <img
            src={Img}
            alt="SignIn Image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4">
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
            to="/signup"
            locationtxt="Sign Up"
          />
        </div>
      </div>
    </div>
  );
}
