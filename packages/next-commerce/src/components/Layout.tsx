import React, { useEffect } from 'react';
import Header from './Header';
import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  height: calc(100% - 68px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
