import React, { useEffect } from 'react';
import Header from './Header';
import { Space_Grotesk } from 'next/font/google';
const inter = Space_Grotesk({ subsets: ['latin'] });
import Head from 'next/head';
import styled from 'styled-components';

const Div = styled.div``;

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <Div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          name="viewport"
          content="initial-scale=1, maximum-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="og:title" content="크림" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />
      <main className={inter.className}>{children}</main>
    </Div>
  );
}
