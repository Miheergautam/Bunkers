import React from 'react';
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className="relative h-screen bg-cover bg-center flex flex-col justify-end"
         style={{ 
           backgroundImage: `url('https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` 
         }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-300 bg-opacity-20 flex flex-col justify-center items-center">
        {/* Navigation Bar */}
        <nav className="absolute top-0 left-0 right-0 px-6 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-3xl text-cerulean">Bunkers</a>
          <div className="flex space-x-4 font-semibold">
            <a href="/" className="text-cerulean">Home </a> <p>|</p>
            <a href="/about" className="text-cerulean">About us</a> <p>|</p>
            <a href="/contact" className="text-cerulean">Contact us</a> <p>|</p>
            <a href="/blogs" className="text-cerulean">Blogs</a> <p>|</p>
            {/* Replace with your user profile button */}
            <CgProfile className='text-3xl text-cerulean hover:cursor-pointer'/>
          </div>
        </nav>

        {/* Hero Section Content */}
        <div className="text-cerulean text-center px-6 mb-24">
          <h1 className="text-4xl font-bold mb-4">Discover Your Home away from your Home</h1>
          <button className="bg-mist hover:bg-cerulean text-white py-2 px-4 rounded-full shadow-lg">
            Explore Hostels
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
