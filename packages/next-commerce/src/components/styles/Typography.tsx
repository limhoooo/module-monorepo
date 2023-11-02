import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { TypeTypo, _typography } from '@/src/styles/Typography';
import { ThemeInterface, TypeFontWeight } from '@/src/styles/theme';

type TypeTypoHtml = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export interface TypographyProps {
  tag: TypeTypoHtml;
  typo: TypeTypo;
  weight: TypeFontWeight;
}

type Props = PartialPick<TypographyProps, 'typo'> &
  HTMLAttributes<HTMLSpanElement>;
type WrapperProps = Props & { theme: ThemeInterface };

const Element = styled.span<WrapperProps>`
  ${({ theme, weight, typo }) => css`
    ${_typography[typo]}
    ${weight && theme.fontWeight[weight]}
  `}
`;

const Typography = ({ tag, typo, children, ...otherProps }: Props) => {
  return (
    <Element as={tag} typo={typo} {...otherProps}>
      {children}
    </Element>
  );
};

export default Typography;
