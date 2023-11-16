import React from 'react';
import * as S from './styles';
import Image from 'next/image';
import Button from '../styles/Button';
import Typography from '../styles/Typography';

type Props = {
  title: string;
  alt: string;
  $width: string;
  $height: string;
  path: string;
  isButton?: boolean;
};

export default function ProductCard({
  title,
  alt,
  $width,
  $height,
  path,
  isButton,
}: Props) {
  return (
    <S.Wrapper $width={$width} $height={$height}>
      <Image src={`/images/products/${path}.webp`} alt={alt} fill />
      {isButton && (
        <S.ButtonBox>
          <Button bgcolor="white">
            <Typography typo="text_s" weight="bold">
              {title}
            </Typography>
          </Button>
        </S.ButtonBox>
      )}
    </S.Wrapper>
  );
}
