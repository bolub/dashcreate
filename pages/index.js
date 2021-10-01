import Head from 'next/head';
import Navbar from '../Components/Navbar';
import TextWithIcon from '../Components/TextWithIcon';

export default function Home() {
  const openLink = (url) => {
    if (typeof window !== 'undefined') {
      window.open(url);
    }
  };

  return (
    <>
      <Head>
        <title>Brand Identity Camp 1.0 - Dashcreate</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <header className='px-10 flex flex-col md:flex-row mt-16 md:py-10'>
        <div className='w-full mb-10 md:md-0 md:w-3/5 md:pr-20 my-auto'>
          <h1 className='text-4xl font-black '>Brand Identity Camp 1.0</h1>

          <p className='mt-6'>
            Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula.
            Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis
            lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Integer nec odio. Praesent
            libero. Sed cursus ante dapibus diam. Sed nisi.
          </p>

          <div className='flex mt-14'>
            <button
              className='transition duration-100 bg-purple-500 text-white py-3 px-4
            
            rounded-sm font-semibold'
              onClick={() => openLink('https://Bit.ly/bidc1')}
            >
              Register now
            </button>

            <button
              className='transition duration-100 hover:border-purple-500 border border-transparent text-purple-500 ml-3 py-3 px-4
            
            rounded-sm font-semibold'
            >
              Find out more
            </button>
          </div>
        </div>

        <div className='w-full md:w-2/5 my-auto'>
          <div className='rounded-md bg-purple-100 text-purple-500 py-10 md:py-16 px-5 flex flex-col'>
            <div className='md:m-auto'>
              <div className='flex flex-col md:flex-row mb-6'>
                <TextWithIcon
                  className='md:mr-24'
                  text='Location'
                  icon={
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
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  }
                />

                <span className='font-bold ml-auto my-auto'>Online</span>
              </div>

              {/* fee */}
              <div className='flex flex-col md:flex-row mb-6'>
                <TextWithIcon
                  className='md:mr-24'
                  text='Registration Fee'
                  icon={
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
                        d='M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                  }
                />

                <span className='font-bold ml-auto my-auto'>N15,000</span>
              </div>

              {/* duration */}
              <div className='flex flex-col md:flex-row mb-6'>
                <TextWithIcon
                  className='md:mr-24'
                  text='Duration'
                  icon={
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
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  }
                />

                <span className='font-bold ml-auto my-auto'>Oct 1- 0ct 8</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <main>Hello from a tailwind site</main> */}
    </>
  );
}
