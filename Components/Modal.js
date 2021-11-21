import React from 'react';

import { Dialog, Transition } from '@headlessui/react';

const Modal = ({ isOpen, setIsOpen, btnRef, children, isCentered }) => {
  return (
    <>
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
          initialFocus={btnRef}
          className='fixed z-10 inset-0 overflow-y-auto'
        >
          <div
            className={`flex flex-col min-h-screen mt-12 ${
              isCentered && 'items-center justify-center'
            }`}
          >
            <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

            {children}
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
