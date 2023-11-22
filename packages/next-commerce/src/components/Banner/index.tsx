import Image from 'next/image';
import React from 'react';
import * as S from './styles';
import MultiCarousel from '../MultiCarousel';
import { TypeBanners, productApi } from '@/src/service/productApi';

type Props = {
  banners: TypeBanners[];
};

export default function Banner({ banners }: Props) {
  return (
    <S.Wrapper>
      <MultiCarousel arrows={false} autoPlay={true} infinite={true}>
        {banners.map(item => (
          <S.Div key={item.name}>
            <Image
              src={`/images/banner/${item.name}.webp`}
              alt={item.alt}
              fill
            />
          </S.Div>
        ))}
      </MultiCarousel>
    </S.Wrapper>
  );
}
