/**
 * @type import('webpack').Configuration
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');

module.exports = (env, argv) => {
  const mode = argv.mode;
  const isProduction = mode === 'production';

  return {
    mode: mode,
    entry: './src/main.tsx',
    output: {
      path: `${__dirname}/dist`,
      filename: '[name].[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: "Webpack App",
      }),
        new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist'],
      }),
    ],
    devServer: {
      open: true,
    },
    devtool: isProduction ? false : 'source-map',
  };
};
