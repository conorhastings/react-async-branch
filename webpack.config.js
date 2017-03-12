const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = {
  entry: path.join(__dirname,  'example', 'src', 'index.js'),
  output: {
    path: path.join(__dirname, 'example', 'dist'),
    filename: 'build.js',
    publicPath: path.join(__dirname, 'example', 'dist', '/')
  },

  context: path.resolve(__dirname, 'example', 'src'),
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, "example", "src"),
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production')  })
  ]
};