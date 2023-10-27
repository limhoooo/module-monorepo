import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Typography from './styles/Typography';
import { userApi } from '../service/api';
import { useRecoilState } from 'recoil';
import { isLoginAtom, userStateAtom } from '../stores/login';

const Wrapper = styled.header`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #aaa;
  > span {
    margin-left: 10px;
    cursor: pointer;
  }
`;

const Header = () => {
  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const [userState, setUserState] = useRecoilState(userStateAtom);

  const logOut = async () => {
    await userApi.logout();
    setUserState({ name: '' });
    setIsLogin(false);
  };
  return (
    <Wrapper>
      <Typography typo={'text_m'}>
        <Link href={'/home'}>Home</Link>
      </Typography>
      <Typography typo={'text_m'}>
        <Link href={'/admin'}>Admin</Link>
      </Typography>
      {isLogin ? (
        <Typography typo={'text_m'} onClick={logOut}>
          Logout
        </Typography>
      ) : (
        <Typography typo={'text_m'}>
          <Link href={'/login'}>login</Link>
        </Typography>
      )}
    </Wrapper>
  );
};

export default Header;
