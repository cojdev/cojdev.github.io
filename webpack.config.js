const path = require('path');

module.exports = {
  entry: './src/js/index.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'js'),
    publicPath: 'js',
  },

  devtool: 'source-map',

  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
