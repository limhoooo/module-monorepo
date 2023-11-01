///
/**
 * as is
 * 1. 타이포그라피 별로 css 코드가 하드코딩 되어 있음.
 * 2. 타이포그라피 컴포넌트에 비지니스와 관련 없는 css 코드량이 너무 많음
 *
 * to be
 * 1. 타이포그라피에 작성 된 css 를 글로벌테마 영역으로 옮긴다.
 */

import { CSSProp, css } from 'styled-components';
import { fontSize, fontWeight, letterSpacing, lineHeight } from './theme';

/**
 * 1. theme 의 typo 객체가 css 하드코딩 되어 있음.
 */

// as is
// export const typography = {
//   heading1: css`
//     font-weight: 500;
//     font-size: 80px;
//     line-height: 84px;
//     letter-spacing: -3px;
//   `,
//   heading2: css`
//     font-weight: 500;
//     font-size: 72px;
//     line-height: 76px;
//     letter-spacing: -2px;
//   `,
//   heading3: css`
//     font-weight: 500;
//     font-size: 54px;
//     line-height: 58px;
//     letter-spacing: -1px;
//   `,
// };
export type TypeTypo =
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

type TypeTypoSchemaCss = Record<string, CSSProp>;
type TypeTypoSchema = Record<TypeTypo, TypeTypoSchemaCss>;
// to be
const typographySchema: TypeTypoSchema = {
  heading1: {
    fontSize: fontSize.heading1,
    fontWeight: fontWeight.basic,
    lineHeight: lineHeight.lh84,
    letterSpacing: letterSpacing.lsm3,
  },
  heading2: {
    fontSize: fontSize.heading3,
    fontWeight: fontWeight.basic,
    lineHeight: lineHeight.lh58,
    letterSpacing: letterSpacing.lsm1,
  },
  heading3: {
    fontSize: fontSize.heading3,
    fontWeight: fontWeight.basic,
    lineHeight: lineHeight.lh44,
    letterSpacing: letterSpacing.lsm04,
  },
  heading4: {
    fontSize: fontSize.heading4,
    fontWeight: fontWeight.basic,
    lineHeight: lineHeight.lh38,
    letterSpacing: letterSpacing.lsm06,
  },
  heading5: {
    fontSize: fontSize.heading5,
    fontWeight: fontWeight.basic,
    lineHeight: lineHeight.lh38,
    letterSpacing: letterSpacing.lsm06,
  },
  heading6: {
    fontSize: fontSize.heading6,
    fontWeight: fontWeight.basic,
    lineHeight: lineHeight.lh34,
    letterSpacing: letterSpacing.lsm06,
  },
  text_xxl: {
    fontSize: fontSize.xxl,
    lineHeight: lineHeight.lh40,
  },
  text_xl: {
    fontSize: fontSize.xl,
    lineHeight: lineHeight.lh34,
  },
  text_l: {
    fontSize: fontSize.l,
    lineHeight: lineHeight.lh32,
  },
  text_m: {
    fontSize: fontSize.m,
    lineHeight: lineHeight.lh30,
  },
  text_s: {
    fontSize: fontSize.s,
    lineHeight: lineHeight.lh26,
  },
  text_xs: {
    fontSize: fontSize.xs,
    lineHeight: lineHeight.lh22,
  },
  text_xxs: {
    fontSize: fontSize.xxs,
    lineHeight: lineHeight.lh20,
  },
};

function generatedTypo(schema: TypeTypoSchema) {
  const typography: TypeTypoSchemaCss = {};
  for (const item in schema) {
    const styleName = item as TypeTypo;
    const { fontSize, fontWeight, lineHeight, letterSpacing } =
      schema[styleName];

    typography[styleName] = css`
      ${fontSize && `${fontSize};`}
      ${fontWeight && `${fontWeight};`}
      ${lineHeight && `${lineHeight};`}
      ${letterSpacing && `${letterSpacing};`}
    `;
  }

  return typography;
}
export const _typography = generatedTypo(typographySchema);
