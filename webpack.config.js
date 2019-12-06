const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    app: './src/index.js'
  },
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
