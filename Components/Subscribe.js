import React, { useRef } from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const Subscribe = () => {
  const emailRef = useRef(undefined);

  return (
    <div className='px-5 md:px-16 py-16 border border-gray-200 flex flex-col justify-center items-center text-center '>
      <h2 className='text-2xl md:text-3xl font-black '>
        Subscribe to get more updates
      </h2>

      <div className='flex flex-col md:flex-row mt-8 w-full justify-center'>
        <MailchimpSubscribe
          url='https://sprinble.us17.list-manage.com/subscribe/post?u=2aa66e72d9eebb87891395f45&id=bc37e9df04'
          render={({ subscribe, status, message }) => (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                try {
                  subscribe({
                    EMAIL: emailRef.current.value,
                  });
                } catch (error) {
                  console.log(error.message);
                }
              }}
            >
              <input
                className='w-full md:w-96 my-auto py-3 px-5 border-gray-200 rounded-sm mr-2 focus:outline-none  focus:border-purple-500 border-2'
                placeholder='Paul@email.com'
                ref={emailRef}
                required
              />

              <button
                className='mt-2 w-full md:w-auto md:my-auto transition duration-100 bg-black text-white py-3 px-4

            rounded-sm font-semibold'
                type='submit'
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Subscribing' : 'Subscribe'}
              </button>

              {status === 'error' && (
                <p class='mt-4' dangerouslySetInnerHTML={{ __html: message }} />
              )}
              {status === 'success' && (
                <p class='mt-4'>Subscribed Successfully</p>
              )}
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default Subscribe;
