import React, { useEffect } from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/client';

import CustomThemeProvider from '../components/Theme/CustomThemeProvider';
import Dev from '../components/Dev';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // const devRef = React.useRef();
  // const devRef = React.createRef();

  // const devTheme = {};
  // useEffect(() => {
  //   console.log('App -> devRef', devRef);
  // }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Canvas</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta
          name="description"
          content="make your Next.js application work offline using service workers via Google's workbox"
        />
      </Head>
      {/* <Dev theme={devTheme} /> */}

      <CustomThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </CustomThemeProvider>
    </ApolloProvider>
  );
}
// }
