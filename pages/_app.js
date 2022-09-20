/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import 'styles/globals.css';

import "/pages/app.scss";
export default App;

function App({ Component, pageProps }) {

    const [loading, setLoading] = useState(false);

    return (
      <>
        {loading ? (
          <div className="loader-container">
            <CircularProgress className="loader" />
          </div>
        ) : (
          <>
            <Head>
              <title>Bolt-India&apos;s largest EV charging network</title>
              {/* eslint-disable-next-line @next/next/no-css-tags */}
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
                rel="stylesheet"
              />
              <link
                href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                rel="stylesheet"
              />
            </Head>
            <Component {...pageProps} />
          </>
        )}
      </>
    );
}
