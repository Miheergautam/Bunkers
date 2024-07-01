// UserNavbar.js
import React, { useState } from 'react';
import { MdDashboard } from "react-icons/md";
import { HiBuildingOffice } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineQuestionCircle } from "react-icons/ai"; // Import Support icon

function UserNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  // Toggle hamburger menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Toggle profile menu
  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  return (
    <div className="flex items-center justify-between bg-cerulean text-white p-4">
      {/* Left Side - Hamburger Menu */}
      <div>
        <button onClick={toggleMenu} className="text-xl text-white">
          <GiHamburgerMenu className='text-2xl' />
          <div className={`absolute left-0 text-white bg-cerulean h-full p-3 mt-2 transform transition-all ease-in-out ${menuOpen ? 'w-80' : 'w-15'}`}>
            <a href="#" className="block p-2 hover:bg-white hover:text-cerulean rounded-md">{menuOpen ? "Dashboard" : <MdDashboard />}</a>
            <a href="#" className="block p-2 hover:bg-white hover:text-cerulean rounded-md">{menuOpen ? "Hostel" : <HiBuildingOffice />}</a>
            <a href="#" className="block p-2 hover:bg-white hover:text-cerulean rounded-md">{menuOpen ? "Request" : <VscGitPullRequestNewChanges />}</a>
            <a href="#" className="block p-2 hover:bg-white hover:text-cerulean rounded-md">{menuOpen ? "Support" : <AiOutlineQuestionCircle />}</a>
          </div>
        </button>
      </div>

      {/* Right side - Notification and profile icons */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-white">
          <IoMdNotificationsOutline className='text-2xl' />
        </a>
        <button onClick={toggleProfileMenu} className="text-white">
          <CgProfile className='text-2xl' />
          {profileMenuOpen && (
            <div className="absolute right-0 mt-5 w-40 bg-white rounded-sm shadow-lg">
              <a href="#" className="block p-2 text-gray-800 hover:bg-gray-200"> Account</a>
              <a href="#" className="block p-2 text-gray-800 hover:bg-gray-200">Settings</a>
              <a href="#" className="block p-2  text-gray-800 hover:bg-gray-200">Sign Out</a>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default UserNavbar;
