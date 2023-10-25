import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { fontSize } from '../../styles/theme';

type ButtonProps = ButtonStyled & React.ComponentProps<'button'>;

type ButtonStyled = {
  bgcolor?: 'black' | 'white' | 'none' | 'primary';
  radius?: 'pill' | 'rounded' | 'sharp';
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  $full?: boolean;
};

const ButtonStyled = styled.button<ButtonStyled>`
  ${({ theme, size, radius, bgcolor, $full }) => css`
    ${size && theme.buttonSize[size]}
    ${radius && theme.buttonRadius[radius]}
    ${bgcolor && theme.buttonBgColor[bgcolor]}
    ${$full && 'width: 100%;'}
  `}
`;

/**
 * 1. 버튼 컴포넌트에서 받은 prop 이 styled prop 으로 이어지고 있으나 타입 체이닝이 끊겨있음.
 * 2. 모든 타입(버튼 어트리뷰트, 스타일 프롭)이 ButtonProps 하나의 타입에 작성 되어 있어 집합 관계가 잘못되어있음.
 * 3. full 이라는 boolean 타입을 str 으로 사용하고 있음. //
 * 4. full 값이 false 일 때 css 에 false 값이 들어감 //
 * 5. variant: primary, secondary, default
 * 6. size: large, medium, small
 *   - 5,6번은 styled provider 에서 값을 주입
 */

const Button = ({
  bgcolor = 'black',
  radius = 'pill',
  size = 'm',
  children,
  ...otherProps
}: ButtonProps) => {
  return (
    <ButtonStyled bgcolor={bgcolor} radius={radius} size={size} {...otherProps}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
