import React from 'react';
import Navbar from '../components/HomePageComponent/Navbar';
import Universities from '../components/HomePageComponent/Universities';
import Footer from '../components/HomePageComponent/Footer';

const HomePage = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Universities />
      <Footer />
    </div>
  );
};

export default HomePage;
