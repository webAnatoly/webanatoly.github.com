'use strict';

var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: {
    index: "./frontend/js/index.js",
    about: "./frontend/js/about_HTML.js",
    services: "./frontend/js/services_HTML.js"
  },

  output: {
    path: __dirname + "/public",
    publicPath: '',
    filename: "./js/[name].js",
    library: "[name]"
  },

  watch: true,
  watchOptions: {
    aggregateTimeout: 100,
  },

  devtool: "inline-cheap-module-source-map",

  module: {
    loaders: [{
      test: /\.js$/,  
      loader: "babel-loader",
      exclude: /node_modules/,
      options: {
        presets: ["env"]
      }
    },{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: {
          loader: "css-loader",
          options: {
            modules: true,
            localIdentName: "[name]__[local]___[hash:base64:5]",
            url: false
          }
        }
      })
    },{
      test: /\.(png|jpg|gif|svg)$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "img/"
        }
      }]
    }]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(), // will not create files if any error occurs
    new ExtractTextPlugin("css/main.css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common"
    }),
    new HtmlWebpackPlugin({
      title: 'The Gym - Personal Training',
      template: 'frontend/index.html',
      filename: 'index.html',
      chunks: ['common', 'index']
    }),
    new HtmlWebpackPlugin({
      title: 'About',
      template: 'frontend/index.html',
      filename: 'about.html',
      chunks: ['common', 'about']
    }),
    new HtmlWebpackPlugin({
      title: 'Services',
      template: 'frontend/index.html',
      filename: 'services.html',
      chunks: ['common', 'services']
    })
  ]

};