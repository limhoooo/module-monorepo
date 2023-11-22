import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import Button from '../styles/Button';
import Typography from '../styles/Typography';
import { TypeProducts } from '@/src/service/productApi';
import StarGrade from './StarGrade';

type Props = {
  product: TypeProducts;
  $width: string;
  $height: string;
  isButton?: boolean;
  isInfo?: boolean;
};

export default function ProductCard({
  product,
  $width,
  $height,
  isButton,
  isInfo,
}: Props) {
  return (
    <S.Wrapper $width={$width} $height={$height}>
      <S.ProductCard>
        <Image
          src={`/images/products/${product.imagePath}.webp`}
          alt={product.alt}
          fill
        />
        {isButton && (
          <S.ButtonBox>
            <Button bgcolor="white">
              <Typography typo="text_s" weight="bold">
                {product.title}
              </Typography>
            </Button>
          </S.ButtonBox>
        )}
      </S.ProductCard>
      {isInfo && (
        <S.ProductInfoBox>
          <StarGrade grade={product.grade} />
          <Typography tag={'p'} typo="text_s" weight="bold">
            {product.title}
          </Typography>
          <Typography tag={'p'} typo="text_s" weight="bold">
            ${product.price}
          </Typography>
        </S.ProductInfoBox>
      )}
    </S.Wrapper>
  );
}
