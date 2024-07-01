// src/pages/UniversityPage.jsx
import React from 'react';

const UniversityPage = () => {
  return (
    <div className="min-h-screen bg-twilight text-rihno flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 text-pomegranate">University Hostel Booking</h1>
      <p className="text-lg mb-8">
        Select your university and book your room.
      </p>
      <a
        href="/"
        className="bg-rihno text-white py-2 px-4 rounded-md hover:bg-supernova hover:text-rihno transition duration-300"
      >
        Back to Home
      </a>
    </div>
  );
};

export default UniversityPage;
