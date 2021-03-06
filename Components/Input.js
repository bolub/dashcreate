import React from 'react';

const Input = ({ type, id, name, placeholder, required, onChange }) => {
  return (
    <input
      className='w-full my-auto py-3 px-5 border-gray-200 rounded-sm mr-2 focus:outline-none  focus:border-purple-500 border-2 placeholder-gray-400'
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
};

export default Input;
