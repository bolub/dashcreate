import React, { useState, useEffect, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';

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

  return (
    <nav className='px-5 md:px-16 mt-5 py-6 sticky top-0 flex bg-white'>
      <span id='logo' className='font-bold text-2xl my-auto mr-5'>
        <span className='text-purple-500'>Dash</span>

        <span style={{ color: 'rgba(245, 158, 11' }}>Create</span>
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
            className='ml-6 transition duration-100 border-purple-500 border border-transparent text-purple-500 py-3 px-4
            
            rounded-sm font-semibold '
            onClick={() => openLink('https://Bit.ly/bidc1')}
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

      <Transition
        show={isOpen}
        enter='transition duration-100 ease-out'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition duration-75 ease-out'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          initialFocus={completeButtonRef}
          className='fixed z-10 inset-0 overflow-y-auto'
        >
          <div className='flex flex-col  items-center justify-center min-h-screen'>
            <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

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
                className='mb-8 transition duration-100 border-purple-500 border border-transparent text-purple-500 py-3 px-4
            
            rounded-sm font-semibold '
                onClick={() => openLink('https://Bit.ly/bidc1')}
              >
                Register now
              </button>
            </div>
          </div>
        </Dialog>
      </Transition>
    </nav>
  );
};

export default Navbar;
