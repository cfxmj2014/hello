var path = require('path');

module.exports = {
  entry: {
    asyn: './asyn.js',
  },
  output: {
    path: path.resolve('build/'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
