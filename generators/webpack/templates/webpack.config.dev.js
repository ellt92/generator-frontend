const path = require('path');
const webpack = require('webpack');
const shared = require('./webpack.shared');

module.exports = Object.assign({}, shared, {
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    path.resolve(__dirname, '<%= source %>', '<%= entry %>'),
  ],
  mode: 'development',
  output: {
    path: path.resolve('<%= destination %>'),
    filename: 'index.bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});
