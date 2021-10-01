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

  return (
    <nav className='px-5 md:px-16 mt-5 py-6 sticky top-0 flex bg-white'>
      <span id='logo' className='font-bold text-2xl my-auto mr-5'>
        <span className='text-purple-500'>Dash</span>

        <span style={{ color: 'rgba(245, 158, 11' }}>Create</span>
      </span>

      <div className='ml-auto my-auto'>
        <a
          href='#instructors'
          className='mr-6 cursor-pointer text-gray-600 font-medium hover:text-purple-500'
        >
          Instructors
        </a>
        <a
          href='#whatYouLearn'
          className=' cursor-pointer text-gray-600 font-medium hover:text-purple-500'
        >
          What You'll Learn
        </a>
        {scrollY > 300 && (
          <button
            className='ml-6 transition duration-100 border-purple-500 border border-transparent text-purple-500 py-3 px-4
            
            rounded-sm font-semibold '
            onClick={() => openLink('https://Bit.ly/bidc1')}
          >
            Register now
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
