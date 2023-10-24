import React from 'react';
import styled from 'styled-components';
import { _typography } from '../../styles/Typography';
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

type TypeTypo =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'text_xxl'
  | 'text_xl'
  | 'text_l'
  | 'text_m'
  | 'text_s'
  | 'text_xs'
  | 'text_xxs';

type TypographyProps = {
  tag?: string;
  type?: TypeFontStyle;
  color?: string;
  weight?: TypeFontWeight;
  typo: TypeTypo;
  children: React.ReactNode;
};

const Typography = ({
  tag,
  color = '#121212',
  weight,
  children,
  typo,
  type,
}: TypographyProps) => {
  const Element: any = styled.span`
    ${_typography[typo]}
  `;
  return (
    <Element as={tag} color={color} typo={typo} type={type} weight={weight}>
      {children}
    </Element>
  );
};

export default Typography;
