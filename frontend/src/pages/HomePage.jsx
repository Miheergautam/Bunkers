// src/pages/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-rihno text-twilight">
      {/* Motivational Section */}
      <section className="flex flex-col justify-center items-center py-16 bg-supernova text-rihno">
        <h1 className="text-4xl font-bold mb-4">Discover Your Home Away From Home</h1>
        <p className="text-lg mb-8 max-w-2xl text-center">
          Join a vibrant community and make lifelong friends while living in our top-notch hostels.
          Experience comfort, safety, and convenience all in one place.
        </p>
        <a
          href="/university"
          className="bg-pomegranate text-white py-2 px-4 rounded-md hover:bg-rihno hover:text-supernova transition duration-300"
        >
          Explore Universities
        </a>
      </section>

      {/* Gallery of Universities */}
      <section className="py-16 px-8 bg-twilight text-rihno">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Partner Universities</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {[
            'University A',
            'University B',
            'University C',
            'University D',
          ].map((university, index) => (
            <div
              key={index}
              className="bg-white text-rihno p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={`https://via.placeholder.com/150?text=${university}`}
                alt={university}
                className="mb-4 rounded"
              />
              <p className="text-lg font-semibold">{university}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* About Us Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our hostel management system is dedicated to providing students with the best living
          experience. We partner with leading universities to offer safe, affordable, and
          comfortable accommodations. Our mission is to create a home-like environment that
          fosters academic and personal growth.
        </p>
      </section>

    </div>
  );
};

export default HomePage;
