import { CSSProp, css } from 'styled-components';
import { theme } from './theme';

const { fontSize, letterSpacing, lineHeight } = theme;
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

type TypeTypoSchemaObject = Partial<Record<TypeTypo, CSSProp>>;
type TypeTypoSchema = TypeTypo[];

const sizeMap = {
  heading1: fontSize.heading1,
  heading2: fontSize.heading2,
  heading3: fontSize.heading3,
  heading4: fontSize.heading4,
  heading5: fontSize.heading5,
  heading6: fontSize.heading6,
  text_xxl: fontSize.xxl,
  text_xl: fontSize.xl,
  text_l: fontSize.l,
  text_m: fontSize.m,
  text_s: fontSize.s,
  text_xs: fontSize.xs,
  text_xxs: fontSize.xxs,
};
const lineHeightMap = {
  heading1: lineHeight.lh84,
  heading2: lineHeight.lh58,
  heading3: lineHeight.lh44,
  heading4: lineHeight.lh38,
  heading5: lineHeight.lh38,
  heading6: lineHeight.lh34,
  text_xxl: lineHeight.lh40,
  text_xl: lineHeight.lh34,
  text_l: lineHeight.lh32,
  text_m: lineHeight.lh30,
  text_s: lineHeight.lh26,
  text_xs: lineHeight.lh22,
  text_xxs: lineHeight.lh20,
};
const letterSpacingMap = {
  heading1: letterSpacing.lsm3,
  heading2: letterSpacing.lsm1,
  heading3: letterSpacing.lsm04,
  heading4: letterSpacing.lsm06,
  heading5: letterSpacing.lsm06,
  heading6: letterSpacing.lsm06,
  text_xxl: letterSpacing.lsm06,
  text_xl: letterSpacing.lsm06,
  text_l: letterSpacing.lsm06,
  text_m: letterSpacing.lsm06,
  text_s: letterSpacing.lsm06,
  text_xs: letterSpacing.lsm06,
  text_xxs: letterSpacing.lsm06,
};
const typographySchema: TypeTypoSchema = [
  'heading1',
  'heading2',
  'heading3',
  'heading4',
  'heading5',
  'heading6',
  'text_xxl',
  'text_xl',
  'text_l',
  'text_m',
  'text_s',
  'text_xs',
  'text_xxs',
];

function generateTypographyString(typoKey: TypeTypo) {
  return css`
    ${sizeMap[typoKey]};
    ${lineHeightMap[typoKey]};
    ${letterSpacingMap[typoKey]};
  `;
}
function generatedTypo(schema: TypeTypoSchema) {
  const typography: TypeTypoSchemaObject = {};
  for (const item in schema) {
    const schemaName = schema[item] as TypeTypo;
    typography[schemaName] = generateTypographyString(schemaName);
  }
  return typography;
}
export const _typography = generatedTypo(typographySchema);
