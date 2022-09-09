const path = require('path')

src = path.resolve(__dirname, '../src/app');
console.log("src files: ", path.resolve(__dirname, '../src/app'))
console.log(src + '/index.js')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src/app'),

  // Production build files
  build: path.resolve(__dirname, '../dist/frontend'),

  // Static files that get copied to build folder
  public: path.resolve(__dirname, '../public'),
}