const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const PATHS = {
  app: path.resolve(__dirname, 'src/app'),
  build: path.join(__dirname, 'public'),
};

const commonConfig = merge([{
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
},
  parts.loadJavaScript({ include: PATHS.app }),
]);

const productionConfig = merge([
  parts.extractCSS({ use: 'css-loader' }),
]);

const developmentConfig = merge([
  parts.loadCSS(),
  // parts.extractCSS({ use: 'css-loader' }),
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
