import { ThemeInterface } from '@/src/styles/theme';
import React from 'react';
import styled, { css } from 'styled-components';

export interface ButtonProps extends React.ComponentProps<'button'> {
  bgcolor: 'black' | 'white' | 'none' | 'primary';
  radius: 'pill' | 'rounded' | 'sharp';
  size: 'xl' | 'l' | 'm' | 's' | 'xs';
  $full: boolean;
}
type Props = Partial<ButtonProps>;
type WrapperProps = Props & { theme: ThemeInterface };

const Element = styled.button<WrapperProps>`
  ${({ theme, size, radius, bgcolor, $full }) => css`
    ${size && theme.buttonSize[size]}
    ${radius && theme.buttonRadius[radius]}
    ${bgcolor && theme.buttonBgColor[bgcolor]}
    ${$full && 'width: 100%;'}
  `}
`;

const Button = ({
  bgcolor = 'black',
  radius = 'pill',
  size = 'm',
  children,
  ...otherProps
}: Props) => {
  return (
    <Element bgcolor={bgcolor} radius={radius} size={size} {...otherProps}>
      {children}
    </Element>
  );
};

export default Button;
