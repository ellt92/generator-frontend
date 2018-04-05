const path = require('path');
const shared = require('./webpack.shared');
const ManifestPlugin = require('webpack-manifest-plugin');


module.exports = Object.assign({}, shared, {
  entry: [
    'babel-polyfill',
    path.resolve(__dirname, '<%= source %>', '<%= entry %>'),
  ],
  mode: 'production',
  output: {
    path: path.resolve('<%= destination %>'),
    filename: 'index.bundle-[chunkhash].js',
  },
  plugins: [
    new ManifestPlugin({
      fileName: 'manifest.json',
    }),
  ],
});
