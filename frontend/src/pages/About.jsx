import React from 'react';
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Iurl = 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-soft-green text-deep-teal">
      {/* Company Name and Motivation */}
      <IoMdArrowBack onClick={()=>{navigate("/")}} className='m-4 text-2xl hover:cursor-pointer'/>
      <section className="flex-1 flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold mb-4">Bunkers</h1>
        <p className="text-lg max-w-2xl text-center mb-8">
          At Bunkers, our mission is to create a seamless and convenient hostel booking experience for students. 
          We believe in fostering a community where students can feel at home, find comfort, and thrive academically and personally. 
          Our platform connects students with top-rated hostels that offer safety, affordability, and a welcoming environment.
        </p>
      </section>

      {/* Founder Section with Cards */}
      <section className="flex-1 flex flex-col justify-center items-center bg-mist p-8">
        <h2 className="text-3xl font-bold mb-8 text-white">Our Founders</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: 'Achal', src: Iurl },
            { name: 'Miheer', src: Iurl },
            { name: 'Vibhor', src: Iurl },
          ].map((founder, index) => (
            <div 
              key={index} 
              className="p-4 w-64 h-80 border border-deep-teal rounded-lg shadow-lg max-w-xs bg-cover text-center flex flex-col justify-end"
              style={{
                backgroundImage: `url(${founder.src})`
              }}>
              <div className="bg-golden-yellow text-deep-teal border border-deep-teal bg-opacity-90 p-2 rounded-lg">
                <h3 className="text-base font-semibold">{founder.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-golden-yellow text-deep-teal p-4">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
        </div>
        <div className="text-center">
          <a href="/about" className="block hover:underline">About Us</a>
          <a href="/contact" className="block hover:underline">Contact Us</a>
          <a href="/privacy" className="block hover:underline">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default About;
