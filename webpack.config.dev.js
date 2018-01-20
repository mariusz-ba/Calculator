const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/js/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/src'),
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src/js'),
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
}