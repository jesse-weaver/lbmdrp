const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const PATHS = {
  app: path.resolve(__dirname, 'src/app'),
  build: path.join(__dirname, 'public')
};

const common = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ]
};

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

module.exports = function(env) {
  console.log('env:', env);
  return common;
}
