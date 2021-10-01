import '../styles/global.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@200;300;400;500;600;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
