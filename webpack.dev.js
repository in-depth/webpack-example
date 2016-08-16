/* eslist-disable */
var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')


const PATHS = {
  src: path.join(__dirname, 'src'),
  app: path.join(__dirname, 'src/app.js'),
  build: path.join(__dirname, 'build')
};

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(PATHS.src, 'index.html'),
      chunksSortMode: 'dependency',
      filename: 'index.html',
      inject: 'body',
    }),
  ]
}
