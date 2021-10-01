import React from 'react';

const TextWithIcon = ({ text, icon, className }) => {
  return (
    <div className={`${className} flex`}>
      <span className='my-auto '>{icon}</span>
      <span className='my-auto ml-2'>{text}</span>
    </div>
  );
};

export default TextWithIcon;
