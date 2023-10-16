import typescript from 'rollup-plugin-typescript2';
import commonConfig from '../../rollup.config.js';

export default {
  input: 'src/index.ts', // 입력 파일의 경로를 수정
  output: {
    file: './index.js', // 출력 파일의 경로를 수정
    format: 'esm',
  },
  plugins: [...commonConfig.plugins, typescript()],
};
