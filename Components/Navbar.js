import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const openLink = (url) => {
    if (typeof window !== 'undefined') {
      window.open(url);
    }
  };

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(scrollY);

  return (
    <nav className='px-10 mt-5 py-6 sticky top-0 flex bg-white'>
      <span id='logo' className='font-extrabold text-2xl my-auto'>
        <span className='text-purple-500'>Dash</span>

        <span className='text-yellow-500'>Create</span>
      </span>

      {scrollY > 400 && (
        <button
          className='transition duration-100 border-purple-500 border border-transparent text-purple-500 py-3 px-4
            
            rounded-sm font-semibold ml-auto '
          onClick={() => openLink('https://Bit.ly/bidc1')}
        >
          Register now
        </button>
      )}
    </nav>
  );
};

export default Navbar;
