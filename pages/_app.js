import '@/styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Baby Paradise" />
        <meta property="og:description" content="Baby Paradise is a one stop shop for all your kids' needs." />
        <meta property="og:image" content="https://babyparadisestore.netlify.app/images/logo.jpg" />
        <meta property="og:url" content="https://babyparadisestore.netlify.app" />
        <meta property="og:type" content="website" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
