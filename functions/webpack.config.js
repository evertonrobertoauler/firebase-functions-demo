const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: "./index",
  output: {
    filename: 'index.js',
    path: __dirname,
    libraryTarget: 'commonjs'
  },
  target: 'node',
  externals: [/^[a-z\-0-9]+$/],
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    loaders: [
      { test: /\.ts$/, exclude: /node_modules/, loader: 'ts-loader' }
    ]
  }
};
