const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'built.js'
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      // url-loader file-loader
      { test: /\.jpg|png|gif$/, loader: 'url-loader', options: {limit: 8*1024} },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',

    })
  ],
  mode: 'development'
}