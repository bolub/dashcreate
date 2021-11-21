import React, { useState, useEffect } from 'react';
import Input from './Input';
import { usePaystackPayment } from 'react-paystack';

const Register = ({ setIsRegisterOpen }) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('');

  const config = {
    reference: new Date().getTime(),
    email,
    amount: 1000000,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
  };

  const initializePayment = usePaystackPayment(config);

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log('success');
    setIsRegisterOpen(true);
    setStatus('paid');
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed');
  };

  useEffect(() => {
    setFullname('');
    setEmail('');
    setPhoneNumber('');
    setLocation('');
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await fetch(
        `https://submit-form.com/${process.env.NEXT_PUBLIC_FORM_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            fullname,
            email,
            phoneNumber,
            location,
          }),
        }
      );

      setStatus('success');
      setIsRegisterOpen(false);
      initializePayment(onSuccess, onClose);
    } catch (error) {
      return null;
    }

    setStatus('error');
  };

  return (
    <div className='flex flex-col relative w-full md:w-6/12 bg-white px-8 py-10 rounded  mx-auto'>
      <button
        className='ml-auto hover:bg-gray-100 p-1 rounded-md transition absolute top-6 right-4'
        onClick={() => setIsRegisterOpen(false)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>

      {status === 'paid' ? (
        <div className='text-center mt-8 '>
          <h3 className='text-2xl md:text-3xl font-black mb-5'>
            Payment successful
          </h3>

          <p className='mb-10'>
            Registration for Brand Identity Camp 1.0 has been completed. Regular
            updates will be sent to your email
          </p>
        </div>
      ) : (
        <>
          <h3 className='text-2xl md:text-3xl font-black '>Register</h3>

          <form className='mt-8' onSubmit={onSubmit}>
            <div className='mb-8'>
              <label className='text-sm text-gray-500 font-medium' for='name'>
                Fullname
              </label>

              <Input
                type='text'
                id='name'
                name='name'
                placeholder='Jonathan Mcroy'
                required
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>

            <div class='grid gap-8 md:gap-4 md:grid-cols-2 mb-8'>
              <div className=''>
                <label
                  className='text-sm text-gray-500 font-medium'
                  for='email'
                >
                  Email
                </label>

                <Input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='jonathan@email.com'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className=''>
                <label
                  className='text-sm text-gray-500 font-medium'
                  for='phone_number'
                >
                  Phone Number
                </label>

                <Input
                  type='tel'
                  id='phone_number'
                  name='phone_number'
                  placeholder='2348138067453'
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className='mb-8'>
              <label
                className='text-sm text-gray-500 font-medium'
                for='location'
              >
                Location
              </label>

              <Input
                type='text'
                id='location'
                name='location'
                placeholder=''
                required={false}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <button
              className='transition w-full md:w-auto duration-100 bg-purple-500 text-white py-3 px-4

            rounded-sm font-semibold disabled:bg-purple-300 disabled:text-gray-50'
              type='submit'
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Registering...' : 'Register'}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Register;
