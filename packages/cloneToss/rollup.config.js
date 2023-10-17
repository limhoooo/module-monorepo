import commonConfig from '../../rollup.config.js';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
  ...commonConfig,
};
