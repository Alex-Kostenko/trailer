const path = require('path');
const fs = require('fs')
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devConfig = require('./config/webpack.dev.config');
const prodConfig = require('./config/webpack.prod.config');

const SRC_FOLDER = path.resolve(__dirname, 'src');

function generateHtmlPlugins (templateDir) {
  // Read files in template directory
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir)).filter(fileName => fileName.endsWith('.pug'))
  return templateFiles.map(item => {
    // Split names and extension
    const parts = item.split('.')
    const name = parts[0]
    const extension = parts[1]
    // Create new HTMLWebpackPlugin with options
      return new HtmlWebpackPlugin({
        filename: `${name}.html`,
        template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
      })
  })
}


// Call our function on our views directory.
const htmlPlugins = generateHtmlPlugins('./src')

const commonConfig = {
  target: 'web',

  entry: {
    main: path.resolve(__dirname, 'src/main.js')
  },

  output: {
    filename: '[name].js',
    publicPath: '/',
  },

  module: {
    rules: [
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'img',
            name: '[name].[ext]'
          }
        }
      },

      {
        test: /\.ico$/,
        use: 'file-loader'
      },

      {
        test: /\.(pug|jade)$/,
        loaders: [
          'html-loader',
          'pug-html-loader'
        ],
        include: path.join(__dirname, 'src')
      },

      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts'
          }
        }]
      }
    ]
  },

  context: SRC_FOLDER,

  resolve: {
    modules: ['node_modules', SRC_FOLDER],
    extensions: ['*', '.js'],
  },

  performance: {
    hints: false,
  },

  plugins: [].concat(htmlPlugins)
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    return merge(commonConfig, devConfig);
  }

   if (argv.mode === 'production') {
    return merge(commonConfig, prodConfig);
   }
  }