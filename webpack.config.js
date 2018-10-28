var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var initial = require('postcss-initial');

module.exports = {
  devtool: false,
  entry: ['./src/index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
/*    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),*/
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
      __DEV__: false
    }),
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        }
    })
  ],
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules']
  },
  module: {
    loaders: [
      {
        test: /\.(js)x?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          // 'css-loader?module&localIdentName=[path][name]---[local]',
          'postcss-loader'
        ],
        include: [path.join(__dirname, 'src'), path.join(__dirname, 'node_modules')]
      }
    ]
  }
};
