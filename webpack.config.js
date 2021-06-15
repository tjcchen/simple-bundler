module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    common: './src/common.js'
  },
  output: {
    filename: '[name].js'
  },
  devtool: 'source-map'
};