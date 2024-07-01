import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function PasswordBox({ label, placeholder, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mt-1 w-3/4 lg:w-1/2">
      <div className="text-md font-medium text-left py-2">{label}</div>
      <div className="flex gap-2 relative">
        <input
          type={showPassword ? "text" : "password"}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full px-3 py-2 border border-neutral-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-white"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute inset-y-0 right-0 px-3 py-2 text-sm font-medium text-gray-600 focus:outline-none"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
}
