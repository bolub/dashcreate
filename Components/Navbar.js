import React, { useState, useEffect, useRef } from 'react';
import { registrationExpired } from '../data';
import Modal from './Modal';
import Register from './Register';

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

  let [isOpen, setIsOpen] = useState(false);
  let completeButtonRef = useRef(null);

  let [isRegisterOpen, setIsRegisterOpen] = useState(false);
  let registerButtonRef = useRef(null);

  return (
    <nav
      className=' px-5 md:px-16 mt-5 py-6 sticky top-0 flex bg-white'
      style={{ maxHeight: '100px' }}
    >
      <span id='logo' className='font-bold text-2xl my-auto mr-5'>
        <img
          src='./../DashcreateLogo.svg'
          className='h-auto w-44 h-44 absolute -left-8 md:left-4'
          style={{ top: '-40px' }}
        />

        {/* <span className='text-purple-500'>Dash</span>

        <span style={{ color: 'rgba(245, 158, 11' }}>Create</span> */}
      </span>
      {/* right nav */}
      <div className='ml-auto my-auto hidden md:flex'>
        <a
          href='#instructors'
          className='my-auto cursor-pointer text-gray-600 font-medium hover:text-purple-500 mr-6'
        >
          Instructors
        </a>
        <a
          href='#whatYouLearn'
          className='my-auto cursor-pointer text-gray-600 font-medium hover:text-purple-500'
        >
          What You'll Learn
        </a>
        {scrollY > 300 && (
          <button
            className='ml-6 transition duration-100 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-3 px-4 disabled:bg-purple-100 disabled:text-purple-400
             
            rounded-sm font-semibold '
            // onClick={() => openLink('https://Bit.ly/bidc1')}
            ref={registerButtonRef}
            onClick={() => setIsRegisterOpen(true)}
            disabled={registrationExpired}
          >
            Register now
          </button>
        )}
      </div>
      <div className='ml-auto my-auto block md:hidden'>
        <button
          ref={completeButtonRef}
          className='border p-1 rounded-sm'
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        btnRef={completeButtonRef}
        isCentered
      >
        <div className='flex flex-col justify-center items-center text-center relative bg-white px-5 py-28 rounded w-full mx-auto'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='h-6 w-6 mb-10 absolute right-6 top-6 cursor-pointer'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            onClick={() => setIsOpen(false)}
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>

          <div className='mb-8' onClick={() => setIsOpen(false)}>
            <a
              href='#instructors'
              className='cursor-pointer text-gray-600 font-medium  hover:text-purple-500'
            >
              👨‍🏫 &nbsp; Instructors
            </a>
          </div>

          <div className='mb-8' onClick={() => setIsOpen(false)}>
            <a
              href='#whatYouLearn'
              className='cursor-pointer text-gray-600 font-medium  hover:text-purple-500'
            >
              📚 &nbsp; What You'll Learn
            </a>
          </div>

          <button
            className='mb-8 transition duration-100 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white py-3 px-4
            
            rounded-sm font-semibold disabled:bg-purple-100 disabled:text-purple-400'
            // onClick={() => openLink('https://Bit.ly/bidc1')}
            ref={registerButtonRef}
            onClick={() => {
              setIsOpen(false);
              setIsRegisterOpen(true);
            }}
            disabled={registrationExpired}
          >
            Register now
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={isRegisterOpen}
        setIsOpen={setIsRegisterOpen}
        btnRef={registerButtonRef}
      >
        <Register setIsRegisterOpen={setIsRegisterOpen} />
      </Modal>
    </nav>
  );
};

export default Navbar;
