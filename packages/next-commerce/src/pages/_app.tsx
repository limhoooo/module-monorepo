import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { RecoilRoot } from 'recoil';

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
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default _app;
