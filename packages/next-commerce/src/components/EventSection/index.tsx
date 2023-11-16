import React from 'react';
import * as S from './styles';
import Typography from '../styles/Typography';
import ProductCard from '../ProductCard';
import Icon from '../styles/Icon';

export default function EventSection() {
  const EventProduct = {
    id: '4',
    title: 'Nike',
    imagePath: 'product_4',
    alt: 'product_5 image',
    price: '1256.00',
    new: true,
    best: false,
    sale: false,
    grade: 4,
  };
  return (
    <S.Wrapper>
      <Typography typo="text_xxl" tag="p" weight="bold">
        RUN SMART+
      </Typography>
      <Typography typo="text_xs" tag="p">
        Phosfluor escently engage worldwide with web-enabled technology
      </Typography>
      <S.Div>
        <Typography typo="text_l" tag="p">
          Shop Now
        </Typography>
        <Icon icon="arrow-right" size="m" />
      </S.Div>
      <ProductCard product={EventProduct} $width="100%" $height="290px" />
    </S.Wrapper>
  );
}
