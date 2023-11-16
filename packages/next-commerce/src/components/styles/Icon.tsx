import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
// https://www.iconfinder.com/
const iconSize = {
  xl: 32,
  l: 28,
  m: 24,
  s: 20,
  xs: 18,
};
type TypeIcons =
  | 'plus'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'cart'
  | 'check'
  | 'user'
  | 'menu'
  | 'search'
  | 'close';
type TypeIconsSize = 'xl' | 'l' | 'm' | 's' | 'xs';
type TypeIconProps = {
  icon: TypeIcons;
  size: TypeIconsSize;
  color?: 'white' | 'black';
} & React.ComponentProps<'img'>;
// const StyledIcon = styled.img.attrs<TypeIconProps>(({ icon }) => ({
//   src: `/images/icons/${icon}.png`,
// }))`
//   width: ${({ size }) => iconSize[size]};
//   height: ${({ size }) => iconSize[size]};
//   display: inline-block;
//   filter: ${({ color }) => color === 'white' && `invert(1)`};
// `;
const Icon = ({ icon, size = 'm', color, ...otherProps }: TypeIconProps) => {
  return (
    <Image
      src={`/images/icons/${icon}.png`}
      alt={`${icon}icon image`}
      width={iconSize[size]}
      height={iconSize[size]}
    />
  );
};

export default Icon;
