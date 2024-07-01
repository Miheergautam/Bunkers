import React from 'react';
import Navbar from './Navbar';
import Universities from './Universities';
import Footer from './Footer';

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
