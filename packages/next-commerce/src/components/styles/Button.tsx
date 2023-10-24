import React from 'react';
import styled, { css } from 'styled-components';
import { fontSize } from '../../styles/theme';

const buttonSize = {
  xl: css`
    padding: 19px 55px;
    font-size: ${fontSize.xxl};
  `,
  l: css`
    padding: 19px 44px;
    font-size: ${fontSize.xl};
  `,
  m: css`
    padding: 10px 26px;
    font-size: ${fontSize.m};
  `,
  s: css`
    padding: 9px 24px;
    font-size: ${fontSize.s};
  `,
  xs: css`
    padding: 8px 20px;
    font-size: ${fontSize.xs};
  `,
};

const buttonRadius = {
  pill: css`
    border-radius: 39px;
  `,
  rounded: css`
    border-radius: 6px;
  `,
  sharp: css`
    border-radius: 0px;
  `,
};
const buttonBgColor = {
  black: css`
    background-color: #121212;
    color: #fff;
    border: 2px solid #121212;
  `,
  white: css`
    color: #121212;
    background-color: #fff;
    border: 2px solid #121212;
  `,
  none: css`
    color: #121212;
    background-color: none;
    border: 2px solid #121212;
  `,
};

type ButtonProps = {
  bgcolor?: 'black' | 'white' | 'none';
  radius?: 'pill' | 'rounded' | 'sharp';
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  full?: 'true';
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonStyled = styled.button<ButtonProps>`
  ${({ size }) => size && buttonSize[size]}
  ${({ radius }) => radius && buttonRadius[radius]}
  ${({ bgcolor }) => bgcolor && buttonBgColor[bgcolor]}
  ${({ full }) => full && `width: 100%`}
`;
const ButtonInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = ({
  bgcolor = 'black',
  radius = 'pill',
  size = 'm',
  full,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonStyled
      bgcolor={bgcolor}
      radius={radius}
      size={size}
      full={full}
      onClick={onClick}
    >
      <ButtonInner>{children}</ButtonInner>
    </ButtonStyled>
  );
};

export default Button;
