const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const PATHS = {
  entry: path.resolve(__dirname, 'src/app'),
  build: path.join(__dirname, 'public'),
};

const commonConfig = merge([{
  entry: {
    app: PATHS.entry,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    publicPath: '/',
  },
  optimization: {
    moduleIds: 'named'
  },
  module: {
    rules: [
      {
        // test: /\.jsx$|\.es6$|\.js$/,
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
    ], 
  },
  node: {
    dns: 'mock',
    net: 'mock'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      title: 'LBMDROP',
      template: path.resolve(__dirname, './src/template.html'), // template file
      filename: 'index.html', // output file
    }),
    new CleanWebpackPlugin(),    
  ],  
},
  parts.loadJavaScript({ include: PATHS.app }),
]);

const productionConfig = merge([
  parts.extractCSS({ use: 'css-loader' }),
]);

const developmentConfig = merge([
  // parts.loadCSS(),
  parts.extractCSS({ use: 'css-loader' }),
]);

// var webpackConfig = {
//   entry: { app: '/home/jesse/Code/lbmdrp/src/app' },
//   output:
//    {
//      path: '/home/jesse/Code/lbmdrp/public',
//      filename: '[name].js'
//    },
//   performance: { hints: false },
//   plugins: [ NamedModulesPlugin { options: {} } ]
// };

module.exports = function webpackConf(env) {
  console.log('env:', env);
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }
  return merge(commonConfig, developmentConfig);
};
