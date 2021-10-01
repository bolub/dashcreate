import React from 'react';

const TextWithIcon = ({ text, icon, className }) => {
  return (
    <div className={`${className} flex`}>
      <span className='my-auto mr-2'>{icon}</span>
      <span className='my-auto'>{text}</span>
    </div>
  );
};

export default TextWithIcon;
