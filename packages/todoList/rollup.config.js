import commonConfig from '../../rollup.config.js';

export default {
  input: 'src/index.js', // 입력 파일의 경로를 수정
  output: {
    file: 'dist/bundle.js', // 출력 파일의 경로를 수정
    format: 'esm', // ESM 형식으로 빌드 설정
  },
  ...commonConfig,
};
