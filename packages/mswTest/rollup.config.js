// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import serve from 'rollup-plugin-serve';
import html from 'rollup-plugin-generate-html-template';
import json from '@rollup/plugin-json';
import injectProcessEnv from 'rollup-plugin-inject-process-env';

export default {
  input: 'src/index.js', // 입력 파일의 경로를 수정
  output: {
    file: 'dist/bundle.js', // 출력 파일의 경로를 수정
    format: 'iife', // iife 형식으로 빌드 설정 (mockServiceWorker를 등록하기 위함)
  },
  plugins: [
    json(),
    resolve({
      preferBuiltins: false,
      browser: true,
      extensions: ['.mjs', '.js', '.jsx', '.json'],
    }), //node_modules에서 모듈을 불러올수 있도록 해줌, ts/tsx 파일도 불러올수 있음
    commonjs({ include: /node_modules/ }),
    // terser(), //생성된 es번들을 최소화하기 위한 플러그인
    injectProcessEnv({
      NODE_ENV: 'development',
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-env'],
      plugins: [
        ['@babel/plugin-transform-react-jsx', { pragma: 'createElement' }], // JSX pragma를 설정합니다.
      ],
    }), //babel을 사용 할 수 있게 해줌

    html({
      template: 'public/index.html',
      target: 'dist/index.html',
      attrs: ["src='/bundle.js'"],
    }),
    serve({
      // 서버를 어느 디렉토리에서 호스팅할 것인지 설정
      contentBase: 'dist',
      // 포트 번호를 설정
      port: 8080,
      // 브라우저에서 자동으로 열릴지 여부를 설정
      open: true,
      historyApiFallback: true, // SPA 라우팅을 위해 필요한 설정
    }),
  ],
};
