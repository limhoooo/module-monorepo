import React from 'react';
import ProductCard from '../ProductCard';
import * as S from './styles';
import Typography from '../styles/Typography';
import MultiCarousel from '../MultiCarousel';
import { TypeProducts } from '@/src/service/productApi';

type Props = {
  newProducts: TypeProducts[];
};

export default function Arrivals({ newProducts }: Props) {
  return (
    <S.Wrapper>
      <S.TitleBox>
        <Typography typo="text_xl" weight="bold">
          New Arrivals
        </Typography>
      </S.TitleBox>
      <MultiCarousel partialVisbile>
        {newProducts.map(item => (
          <ProductCard
            product={item}
            $width="280px"
            $height="330px"
            isButton
            key={item.id}
          />
        ))}
      </MultiCarousel>
    </S.Wrapper>
  );
}
