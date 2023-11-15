import React from 'react';
import * as S from './styles';
import Typography from '../styles/Typography';
import SearchInput from '../SearchInput';

export default function MenuBar() {
  return (
    <S.Wrapper>
      <SearchInput />
      <S.MenuBox>
        <Typography typo="text_xl">Home</Typography>
      </S.MenuBox>
      <S.MenuBox>
        <Typography typo="text_xl">Shop</Typography>
      </S.MenuBox>
      <S.MenuBox>
        <Typography typo="text_xl">Product</Typography>
      </S.MenuBox>
      <S.MenuBox>
        <Typography typo="text_xl">Pages</Typography>
      </S.MenuBox>
    </S.Wrapper>
  );
}
