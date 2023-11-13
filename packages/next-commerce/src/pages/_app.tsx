import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { NextPage } from 'next';
import { AuthProvider } from '../stores/authContext';

type EnhancedAppProps = AppProps & {
  Component: NextPage;
  pageProps: Record<string, unknown>;
};

const _app = ({ Component, pageProps }: EnhancedAppProps) => {
  const getLayout = Component.getLayout ?? (page => page);

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
      <AuthProvider>
        <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default _app;
