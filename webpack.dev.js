/* eslist-disable */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, 'src'),
  app: path.join(__dirname, 'src/app.js'),
  build: path.join(__dirname, 'build')
};

var webpackconfig = {
  entry: {
    app: [
      'webpack-dev-server/client' + '?/',
      'webpack/hot/dev-server',
      PATHS.app
      ]
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
    new webpack.HotModuleReplacementPlugin(), // Auto refresh page
  ]
}

new WebpackDevServer(webpack(webpackconfig), {
  historyApiFallback: true, // Allows reloading of any URL
  hot: true, // Auto refresh page
  publicPath: webpackconfig.output.publicPath, // Public bath
  quiet: false, // Hides Errors
  watchOptions: {
    ignored: /node_modules/
  }
}).listen(3000, (err, result) => {
  if (err) {
    return console.log(err);
  }

  console.log('Starting the development server on port 3000');
});
