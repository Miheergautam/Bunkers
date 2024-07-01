// Universities.js
import React from 'react';
import Universitycard from "./Universitycard";

const url = 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

function Universities() {
  // Example array of universities
  const universities = [
    { name: 'University A', src: url },
    { name: 'University B', src: url },
    { name: 'University C', src: url },
    { name: 'University D', src: url },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-cerulean">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Map through universities and render Universitycard */}
          {universities.map((university, index) => (
            <Universitycard key={index} name={university.name} src={university.src} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Universities;
