// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackHookPlugin = require('webpack-hook-plugin');

module.exports = {
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: './[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/calculator.html",
      filename: "./index.html"
    }),
    new WebpackHookPlugin({
      onBuildStart:['echo "Webpack Start"'],
      onBuildEnd:['ffplay -autoexit ignore\\done.mp3']
    })
  ],
};