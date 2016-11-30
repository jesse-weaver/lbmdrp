var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
  context: __dirname + "/app",
  entry: {
    javascript: APP_DIR + '/main.js',
    html: APP_DIR + "/index.html"
  },
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders : ["react-hot",'babel-loader']
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ]
  }
};

module.exports = config;
