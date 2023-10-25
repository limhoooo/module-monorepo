import React from 'react';
import styled from 'styled-components';
import { TypeTypo, _typography } from '@/src/styles/Typography';
import { TypeFontStyle, TypeFontWeight } from '@/src/styles/theme';

/**
 * 1. global theme 적용 / css in js, scss
 * 2. design system 에 타이포그라피 추가
 * 3. margin, padding 8배수 값 지원(4배수)
 *
 *
 * 1. tag 종류를 prop 으로 내려서 만든다.
 * 2. typo 종류를 prop 으로 내린다.
 *
 * ```js
 * function App(){
 *   return <Typograpy typo={h_1} tag={} color={} type={} />
 * }
 *```
 */
type TypeTypoHtml = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type TypographyProps = TypographyStyled & React.ComponentProps<TypeTypoHtml>;
type TypographyStyled = {
  tag?: string;
  fontstyle?: TypeFontStyle;
  color?: string;
  weight?: TypeFontWeight;
  typo: TypeTypo;
};

const Typography = ({
  tag,
  color = '#121212',
  typo,
  children,
  ...otherProps
}: TypographyProps) => {
  const Element = styled.span<TypographyStyled>`
    ${_typography[typo]}
  `;
  return (
    <Element as={tag} typo={typo} {...otherProps}>
      {children}
    </Element>
  );
};

export default Typography;
