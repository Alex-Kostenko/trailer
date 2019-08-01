const path = require('path');

const devConfig = {
  mode: 'development',

  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
    filename: '[name].[hash].js',
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

  devtool: 'cheap-module-eval-source-map'
};

module.exports = devConfig;
