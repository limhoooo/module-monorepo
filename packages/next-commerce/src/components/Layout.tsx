import React, { useEffect } from 'react';
import Header from './Header';
import styled from 'styled-components';
import { Space_Grotesk } from 'next/font/google';
const inter = Space_Grotesk({ subsets: ['latin'] });

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main className={inter.className}>{children}</main>
    </>
  );
}
