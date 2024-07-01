// Universitycard.js
import React from 'react';

function Universitycard({ name, src }) {
  return (
    <div className='bg-cover bg-center rounded-lg' style={{
      backgroundImage: `url('${src}')`,
      minHeight: '300px', // Example styling for the card
      padding: '15px',    // Example padding for the card
    }}>
      <p className='text-gray-100 text-xs mt-60 font-bold p-2 rounded-lg bg-mist'>{name}</p>
    </div>
  );
}

export default Universitycard;
