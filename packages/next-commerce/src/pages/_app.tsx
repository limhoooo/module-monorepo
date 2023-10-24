import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import type { AppProps } from 'next/app';
import Layout from './layout';

const _app = ({ Component, pageProps }: AppProps) => {
  if (process.env.NODE_ENV === 'development') {
    if (typeof window === 'undefined') {
      (async () => {
        const { server } = await import('../mock/server');
        server.listen();
      })();
    } else {
      (async () => {
        const { worker } = await import('../mock/browser');
        worker.start();
      })();
    }
  }
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
};

export default _app;
