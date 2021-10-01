import React from 'react';

const Phase = ({ title, description }) => {
  return (
    <div className='mb-10'>
      <p className='font-bold  mb-3 text-lg'>{title}</p>
      <p className='text-gray-600 leading-loose'>{description}</p>
    </div>
  );
};

export default Phase;
