console.log(__dirname);
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/index.ts'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist'),
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
};
