import React from 'react';
import styled from 'styled-components';
import { fontSize, fontWeight } from '../../styles/theme';

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

type TypeColor = {
  blue_900: string;
};
const colors: TypeColor = {
  blue_900: '#05285B',
};

type TypeTypo =
  | 'heading_1'
  | 'heading_2'
  | 'heading_3'
  | 'heading_4'
  | 'heading_5'
  | 'heading_6'
  | 'text_xxl'
  | 'text_xl'
  | 'text_l'
  | 'text_m'
  | 'text_s'
  | 'text_xs'
  | 'text_xxs';

type TypeFontStyle = 'normal' | 'italic' | 'oblique' | 'revert';

type TypeFontWeight = 'bold' | 'semibold' | 'regular';

const heading_1 = styled.h1`
  font-weight: 500;
  font-size: 80px;
  line-height: 84px;
  letter-spacing: -3px;
`;
const heading_2 = styled.h2`
  font-weight: 500;
  font-size: 72px;
  line-height: 76px;
  letter-spacing: -2px;
`;
const heading_3 = styled.h3`
  font-weight: 500;
  font-size: 54px;
  line-height: 58px;
  letter-spacing: -1px;
`;

const heading_4 = styled.h4`
  font-weight: 500;
  font-size: 40px;
  line-height: 44px;
  letter-spacing: -0.4px;
`;

const heading_5 = styled.h5`
  font-weight: 500;
  font-size: 34px;
  line-height: 38px;
  letter-spacing: -0.6px;
`;

const heading_6 = styled.h6`
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  letter-spacing: -0.6px;
`;

const text_xxl = styled.p`
  font-size: ${fontSize.xxl};
  line-height: 40px;
`;
const text_xl = styled.p`
  font-size: ${fontSize.xl};
  line-height: 34px;
`;
const text_l = styled.p`
  font-size: ${fontSize.l};
  line-height: 32px;
`;
const text_m = styled.p`
  font-size: ${fontSize.m};
  line-height: 30px;
`;
const text_s = styled.p`
  font-size: ${fontSize.s};
  line-height: 26px;
`;
const text_xs = styled.p`
  font-size: ${fontSize.xs};
  line-height: 22px;
`;
const text_xxs = styled.p`
  font-size: ${fontSize.xxs};
  line-height: 20px;
`;

const Text: { [key: string]: any } = {
  heading_1,
  heading_2,
  heading_3,
  heading_4,
  heading_5,
  heading_6,
  text_xxl,
  text_xl,
  text_l,
  text_m,
  text_s,
  text_xs,
  text_xxs,
};

type TypographyProps = {
  tag?: string;
  type?: TypeFontStyle;
  color?: string | TypeColor;
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
  const Element: any = styled(Text[typo])`
    font-style: ${({ type }) => type};
    font-weight: ${({ weight }) => fontWeight[weight]};
    color: ${({ color }) => color};
  `;
  return (
    <Element as={tag} color={color} typo={typo} type={type} weight={weight}>
      {children}
    </Element>
  );
};

export default Typography;
