import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Typography from './styles/Typography';

const Wrapper = styled.header`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #aaa;
  a {
    margin-left: 10px;
  }
`;
const Header = () => {
  return (
    <Wrapper>
      <Typography typo={'text_m'}>
        <Link href={'/home'}>home</Link>
      </Typography>
      <Typography typo={'text_m'}>
        <Link href={'/admin'}>admin</Link>
      </Typography>
      <Typography typo={'text_m'}>
        <Link href={'/login'}>login</Link>
      </Typography>
    </Wrapper>
  );
};

export default Header;
