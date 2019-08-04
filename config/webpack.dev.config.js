const path = require('path');
const webpack = require('webpack');

const devConfig = {
  mode: 'development',

  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },

  devServer: {
    contentBase: path.join(__dirname, './src'),
    open: true,
    port: 3000,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    },
    publicPath: '/',
    historyApiFallback: true
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = devConfig;
