import React, { useEffect } from 'react';
import Header from './Header';
import styled from 'styled-components';
import Cookies from 'universal-cookie';
import { useRecoilState } from 'recoil';
import { isLoginAtom } from '../stores/login';
import useIsLogin from '../hooks/useIsLogin';

const Main = styled.main`
  width: 100%;
  height: calc(100% - 68px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Layout({ children }: React.PropsWithChildren) {
  useIsLogin();
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}
