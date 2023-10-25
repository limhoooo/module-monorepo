/**
 * as is
 * 1. 타이포그라피 별로 css 코드가 하드코딩 되어 있음.
 * 2. 타이포그라피 컴포넌트에 비지니스와 관련 없는 css 코드량이 너무 많음
 *
 * to be
 * 1. 타이포그라피에 작성 된 css 를 글로벌테마 영역으로 옮긴다.
 */

import { CSSProp, css } from 'styled-components';

export type TypeFontSizeKey =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'xxl'
  | 'xl'
  | 'l'
  | 'm'
  | 's'
  | 'xs'
  | 'xxs';
export type TypeFontWeight = 'bold' | 'semibold' | 'basic' | 'regular';
export type TypeFontLineHeight =
  | 'lh84'
  | 'lh76'
  | 'lh58'
  | 'lh44'
  | 'lh40'
  | 'lh38'
  | 'lh34'
  | 'lh32'
  | 'lh30'
  | 'lh26'
  | 'lh22'
  | 'lh20';
export type FontLetterSpacing = 'lsm3' | 'lsm2' | 'lsm1' | 'lsm04' | 'lsm06';
export type TypeFontStyle = 'normal' | 'italic' | 'oblique' | 'revert';

export const fontSize: Record<TypeFontSizeKey, CSSProp> = {
  heading1: css`
    font-size: 80px;
  `,
  heading2: css`
    font-size: 72px;
  `,
  heading3: css`
    font-size: 54px;
  `,
  heading4: css`
    font-size: 40px;
  `,
  heading5: css`
    font-size: 34px;
  `,
  heading6: css`
    font-size: 28px;
  `,
  xxl: css`
    font-size: 26px;
  `,
  xl: css`
    font-size: 22px;
  `,
  l: css`
    font-size: 20px;
  `,
  m: css`
    font-size: 18px;
  `,
  s: css`
    font-size: 16px;
  `,
  xs: css`
    font-size: 14px;
  `,
  xxs: css`
    font-size: 12px;
  `,
};

export const fontWeight: Record<TypeFontWeight, CSSProp> = {
  bold: css`
    font-weight: 700;
  `,
  semibold: css`
    font-weight: 600;
  `,
  basic: css`
    font-weight: 500;
  `,
  regular: css`
    font-weight: 400;
  `,
};
export const lineHeight: Record<TypeFontLineHeight, CSSProp> = {
  lh84: css`
    line-height: 84px;
  `,
  lh76: css`
    line-height: 76px;
  `,
  lh58: css`
    line-height: 58px;
  `,
  lh44: css`
    line-height: 44px;
  `,
  lh40: css`
    line-height: 40px;
  `,
  lh38: css`
    line-height: 38px;
  `,
  lh34: css`
    line-height: 34px;
  `,
  lh32: css`
    line-height: 32px;
  `,
  lh30: css`
    line-height: 30px;
  `,
  lh26: css`
    line-height: 26px;
  `,
  lh22: css`
    line-height: 22px;
  `,
  lh20: css`
    line-height: 20px;
  `,
};
export const letterSpacing: Record<FontLetterSpacing, CSSProp> = {
  lsm3: css`
    letter-spacing: -3px;
  `,
  lsm2: css`
    letter-spacing: -2px;
  `,
  lsm1: css`
    letter-spacing: -1px;
  `,
  lsm04: css`
    letter-spacing: -0.4px;
  `,
  lsm06: css`
    letter-spacing: -0.6px;
  `,
};

const buttonSize = {
  xl: css`
    padding: 19px 55px;
    ${fontSize.xxl};
  `,
  l: css`
    padding: 19px 44px;
    ${fontSize.xl};
  `,
  m: css`
    padding: 10px 26px;
    ${fontSize.m};
  `,
  s: css`
    padding: 9px 24px;
    ${fontSize.s};
  `,
  xs: css`
    padding: 8px 20px;
    ${fontSize.xs};
  `,
};
const buttonBgColor = {
  black: css`
    color: #fff;
    background-color: #121212;
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
  primary: css`
    color: #fff;
    background-color: #007bff;
    border: 2px solid #007bff;
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
export const theme = {
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  buttonSize,
  buttonBgColor,
  buttonRadius,
};
