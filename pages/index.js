import Head from 'next/head';
import CountdownComp from '../Components/Countdown.js';
import Navbar from '../Components/Navbar.js';
import Phase from '../Components/Phase';
import Subscribe from '../Components/Subscribe.js';
import TextWithIcon from '../Components/TextWithIcon';
import { Instructors, registrationExpired } from '../data';
import { FB_PIXEL_ID } from '../fpixel.js';

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
        {/* <link rel='icon' href='/favicon.ico' /> */}
        <meta
          name='description'
          content='Brand Identity camp is an initiative to help young and aspiring
            graphic designers learn how to make stunning brand identity designs
            that they see foreign studios make. It’s particularly geared towards
            African students, but we have a little bit of room for international
            persons and also Africans in the working class'
        />

        <meta
          property='og:title'
          content='Brand Identity Camp 1.0 - Dashcreate'
        />
        <meta property='og:site_name' content='Dashcreate' />
        <meta property='og:url' content='https://www.dashcreate.design/' />
        <meta
          property='og:description'
          content='Brand Identity camp is an initiative to help young and aspiring
            graphic designers learn how to make stunning brand Identity designs
            that they see foreign studios make. It’s particularly geared towards
            African students, but we have a little bit of room for international
            persons and also Africans in the working class'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://wallpapercave.com/wp/wp4471362.jpg'
        />

        <noscript>
          <img
            height='1'
            width='1'
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
      </Head>

      <Navbar />

      <CountdownComp dateTime={'22 November, 2021'} />

      <header className='px-5 md:px-16 flex flex-col md:flex-row mt-12'>
        {/* Intro */}
        <div className='w-full mb-10 md:md-0 md:w-3/5 md:pr-20 my-auto'>
          <h1
            className='text-3xl md:text-4xl font-black 
          '
          >
            Want to Master and Monetise Brand Identity Design Skills?
          </h1>
          <h1 className='text-xl md:text-2xl mt-4 text-gray-700'>
            Introducing Brand Identity Camp 1.0 taught by international experts
          </h1>
          <p className='mt-6 text-gray-600 leading-loose'>
            Brand Identity camp is an initiative to help young and aspiring
            graphic designers learn how to make stunning brand Identity designs
            that they see foreign studios make. It’s particularly geared towards
            African students, but we have a little bit of room for international
            persons and also Africans in the working class
          </p>

          <div className='flex flex-col md:flex-row mt-10'>
            <button
              className='transition w-full md:w-auto duration-100 bg-purple-500 text-white py-3 px-4

            rounded-sm font-semibold disabled:bg-purple-300 disabled:text-gray-50'
              onClick={() => openLink('https://Bit.ly/bidc1')}
              disabled={registrationExpired}
            >
              Register now
            </button>

            <a href='#about'>
              <button
                className='transition w-full md:w-auto duration-100 hover:bg-purple-500 hover:text-white border border-purple-500 text-purple-500 mt-3 md:mt-0 md:ml-3 py-3 px-4

            rounded-sm font-semibold'
              >
                Find out more
              </button>
            </a>
          </div>
        </div>

        <div className='hidden md:block w-full md:w-2/5 my-auto'>
          <img src='https://res.cloudinary.com/dq6iuhnpr/image/upload/q_auto:eco/v1633957978/bidc/hero-img_cy2xna.png' />
        </div>
      </header>

      {/* Info */}
      <div className='w-full md:w-2/5 mt-6 md:mt-16 px-3 mx-auto'>
        <div className='rounded-md bg-purple-100 text-purple-500 py-10 md:py-16 px-5 flex flex-col'>
          <div className='md:m-auto'>
            <div className='flex flex-row md:flex-row mb-6'>
              {/* location */}
              <TextWithIcon
                className='md:mr-16'
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

              <span className='font-bold ml-auto my-auto'>
                OAU Campus and Online
              </span>
            </div>

            {/* fee */}
            <div className='flex flex-row md:flex-row mb-6'>
              <TextWithIcon
                className='md:mr-16'
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

              <span className='font-bold ml-auto my-auto'>₦10,000</span>
            </div>

            {/* duration */}
            <div className='flex flex-row md:flex-row mb-6'>
              <TextWithIcon
                className='md:mr-16'
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

              <span className='font-bold ml-auto my-auto'>
                Nov 22nd - Dec 4th
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className='mt-20'>
        <section className='px-5 md:px-16 flex flex-col' id='about'>
          <p className='text-center mb-1 text-gray-600 text-sm font-medium'>
            Wondering...
          </p>
          <h2 className='text-2xl md:text-3xl font-black text-center'>
            What the hell is Brand Identity Design Camp 1.0?
          </h2>

          <div className='mt-8 m-auto' style={{ maxWidth: '850px' }}>
            {/* First */}
            <p className='text-gray-600 leading-loose'>
              Actually it’s the same answer to the question “why does my logo
              design always suck?" or “How do I become a Brand Identity Design
              expert?" <br />
              <br />
              Usually the story of an aspiring{' '}
              <span className='font-bold text-purple-500'>
                Brand Identity Designer
              </span>{' '}
              starts in the phase below:
            </p>

            <div className='border-b mt-10'>
              {/* Phases */}
              <Phase
                title='🤩 The Excitement Phase'
                description=' You’ve just seen a Youtube video on how much it cost Pepsi to
              design their new logo and you realise “damn! I can make millions in a couple of minutes, I want to become a logo
              designer!"'
              />

              <Phase
                title='📚 The Onboarding Phase'
                description='You watch a couple of tutorials on how to make some cool logo designs  on Coreldraw,  usually this stage is followed alongside with a Dunning Kruger effect (ya know... that pride that you know something but infact ya actually don’t). You say to yourself “you know what… I’ll actually slap a logo designer title on my bio on whatsapp, facebook and instagram. I am now ready for commisions". Unfortunately for you, you also saw some of the videos that tell you to charge high for your works.'
              />

              <Phase
                title='😠 The Frustration Phase'
                description='Usually designers start in the manner outlined, they procastinates a lot, works very little and He’s confident in themselves, but deep down they keep searching for ways they can actually “make it" as a designer. But they slowly begin to discover, logo design is just another thing just anybody can make within 5 minutes.'
              />

              <Phase
                title='😞 The I-Give-up Phase'
                description='Once you get to the frustration phase, next is to give up, as you cannot seem to understand how you can make a living from graphic design, and you start to blame the country and the way you think design is. You start to learn another trade.'
              />
            </div>

            <p className='text-gray-600 leading-loose mt-8'>
              The truth is the country does not have a problem, graphic design
              does not have a problem. You have a problem, and its time to get
              that problem solved, with a small token you'll probably spend on a
              single hangout. Now to the question...
            </p>

            <div className='mt-16'>
              <p className='text-xl font-bold text-purple-500'>
                What is Brand Identity design Camp 1.0?
              </p>

              <div
                id='whatYouLearn'
                className='text-gray-600 leading-loose mt-5'
              >
                <p className='mb-8'>
                  Brand Identity design Camp 1.0 is that camp that gives you all
                  the training that you need to become a successful brand
                  identity designer.
                </p>

                <p className='mb-8'>
                  It’s a two week intense training on how to use tested and
                  proven method to generate awesome and original logo design
                  ideas, and flesh those ideas out using industry standard
                  tools.
                </p>

                <div className='mb-20'>
                  <p className='mb-2 font-bold'>You'll learn:</p>

                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    <div className='border rounded-md px-4 py-5 text-center border-gray.500 flex justify-center items-center'>
                      Design Thinking
                    </div>
                    <div className='border rounded-md px-4 py-5 text-center border-gray.500 flex justify-center items-center'>
                      Adobe Illustrator CC from scratch
                    </div>
                    <div className='border rounded-md px-4 py-5 text-center border-gray.500 flex justify-center items-center'>
                      Brand Identity Design and Design Systems
                    </div>
                    <div className='border rounded-md px-4 py-5 text-center border-gray.500 flex justify-center items-center'>
                      3d Software: Blender and Keyshot
                    </div>
                    <div className='border rounded-md px-4 py-5 text-center border-gray.500 flex justify-center items-center'>
                      Illustration and pattern Design
                    </div>
                  </div>
                </div>

                <div className='bg-purple-100 px-5 py-10 flex flex-col justify-center md:flex-row mt-4 mb-16'>
                  <button
                    className='transition w-full md:w-auto duration-100 bg-purple-500 text-white py-3 px-4 rounded-sm font-semibold disabled:bg-purple-300 disabled:text-gray-50'
                    onClick={() => openLink('https://Bit.ly/bidc1')}
                    disabled={registrationExpired}
                  >
                    Register now
                  </button>
                </div>

                <div className='mb-8' id='instructors'>
                  <p className='text-xl font-bold text-purple-500 mb-6 '>
                    Our Classes and Instructors
                  </p>

                  <p className='mb-10'>
                    Our classes are packed with essential training, experience,
                    and inspiration. As though that’s not enough, you get to add
                    experiences of industry pros in this same Nigeria and
                    beyond, those who have fought through the I-give-up phase
                    and have emerged victorious and are now internationally
                    known:
                  </p>

                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                    {Instructors.map((instrData) => {
                      return (
                        <div key={instrData.name} className='mb-6'>
                          <img
                            src={instrData.imageUrl}
                            className='mb-3 object-cover w-full h-72 rounded border'
                          />

                          <div
                            onClick={() => openLink(instrData.portfolioUrl)}
                            className='flex text-black hover:text-purple-500 cursor-pointer'
                          >
                            <h3 className='font-bold my-auto'>
                              {instrData.name}
                            </h3>

                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6 my-auto ml-auto'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                              />
                            </svg>
                          </div>

                          <p className='text-md'>{instrData.title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className='px-5 md:px-16 text-center flex mt-16 flex-col  text-white py-56 bg-purple-500 justify-center items-center'
          id='callToAction'
          style={{
            background: 'url(./Illustration.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <h2 className='font-black text-2xl md:text-3xl mb-4'>
            Ready to Start Brand Identity Camp 1.0?
          </h2>
          <button
            className='transition duration-100 bg-white text-black py-3 px-4

            rounded-sm font-semibold disabled:bg-gray-200 disabled:text-gray-500'
            onClick={() => openLink('https://Bit.ly/bidc1')}
            disabled={registrationExpired}
          >
            Register now
          </button>

          {/* <img
           src='Illustration.jpg'
            className='mt-5'
          /> */}
        </section>
      </main>

      {/* <Subscribe /> */}

      <footer className='my-4'>
        <p className='text-gray-400 text-xs text-center'>
          &copy; Copyright DashCreate {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
}
