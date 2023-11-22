import React from 'react';
import * as S from './styles';
import Icon from '../styles/Icon';

export default function SearchInput() {
  return (
    <S.MenuSearchBox>
      <Icon icon="search" size="m" />
      <S.SearchInput type="text" placeholder="Search" />
    </S.MenuSearchBox>
  );
}
