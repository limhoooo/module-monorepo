const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve("./dist"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css/, //css 파일에대한 정규 표현식
        use: ["style-loader", "css-loader"], // 사용할 모듈 설정
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader", // 사용할 모듈을 지정 합니다.
            options: {
              name: "[name].[ext]", // 파일 이름을 설정 합니다.
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
