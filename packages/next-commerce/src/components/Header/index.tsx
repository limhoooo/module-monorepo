import React, { useEffect, useState } from 'react';
import * as S from './styles';
import Link from 'next/link';
import Icon from '../styles/Icon';
import Image from 'next/image';
import MenuBar from '../MenuBar';
import useChangeRouter from '@/src/hooks/useChangeRouter';

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const changeMenu = () => {
    setIsMenu(state => !state);
  };
  const handleOnLoad = () => {
    setIsMenu(false);
  };

  useChangeRouter(handleOnLoad);

  const openMenu = () => setIsMenu(true);
  const closeMenu = () => setIsMenu(false);
  return (
    <S.Wrapper $isMenu={isMenu}>
      <S.Header>
        <Link href={'/'}>
          <Image
            src={'/images/logo.png'}
            alt="logo image"
            width={105}
            height={18}
          />
        </Link>
        <S.Nav>
          <S.NavList className="mr-1">
            <Link href={'/'}>
              <Icon icon="cart" size="m" />
            </Link>
          </S.NavList>
          <S.NavList className="mr-3">
            <Link href={'/login'}>
              <Icon icon="user" size="m" />
            </Link>
          </S.NavList>
          <S.NavList className="mr-1" onClick={changeMenu}>
            <Icon icon={isMenu ? 'close' : 'menu'} size="m" />
          </S.NavList>
        </S.Nav>
      </S.Header>
      {isMenu && <MenuBar />}
    </S.Wrapper>
  );
};

export default Header;
