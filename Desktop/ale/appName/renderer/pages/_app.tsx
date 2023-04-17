// import React from 'react';
// import type { AppProps } from 'next/app';

import '../styles/globals.css';

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }

// export default MyApp

//_app.js
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  
    </>
  );
}