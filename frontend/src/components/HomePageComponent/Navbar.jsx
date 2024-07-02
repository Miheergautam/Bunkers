import React, { useState } from 'react';
import { CgProfile } from "react-icons/cg";

function Navbar() {
  const [loginMenu, setloginMenu] = useState(false);

  const loginOpen = () => {
    if (loginMenu) setloginMenu(false);
    else setloginMenu(true);
    console.log(loginMenu);
  }

  return (
    <div className="relative h-screen bg-cover bg-center flex flex-col justify-end"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-300 bg-opacity-20 flex flex-col justify-center items-center">
        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-3xl text-deep-teal">Bunkers</a>
          <div className="flex space-x-4 font-semibold">
            <a href="/" className="text-deep-teal">Home </a> <p>|</p>
            <a href="/about" className="text-deep-teal">About us</a> <p>|</p>
            <a href="/contact" className="text-deep-teal">Contact us</a> <p>|</p>
            <a href="/blogs" className="text-deep-teal">Blogs</a> <p>|</p>
            {/* Replace with your user profile button */}
            <CgProfile onClick={loginOpen} className='text-3xl text-deep-teal hover:cursor-pointer' />
            {loginMenu && (
              <div className="absolute right-6 py-2 w-36 h-28 text-center mt-9 border border-deep-teal bg-soft-green rounded-lg shadow-lg">
                <a href="/sign-up" className="block font-normal text-sm mx-2 py-2 rounded-lg hover:bg-mist bg-opacity-50 transition duration-300">
                  Sign-Up
                </a>
                <hr className="m-2 border-deep-teal" />
                <a href="/sign-in" className="block font-normal text-sm py-2 mx-2 rounded-lg hover:bg-mist bg-opacity-50 transition duration-300">
                  Sign-In
                </a>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section Content */}
        <div className="text-deep-teal text-center px-6 mb-24">
          <h1 className="text-4xl font-bold mb-4">Discover Your Home away from your Home</h1>
          <button className="bg-soft-green hover:bg-mist text-deep-teal border border-deep-teal py-2 px-4 rounded-full shadow-lg">
            Explore Hostels
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
