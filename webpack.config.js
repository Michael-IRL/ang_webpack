const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
    compress: true,
    port: 9000,
  },
  entry: {
    app: ['./src/main.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: `[name].js`,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'raw-loader',
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
