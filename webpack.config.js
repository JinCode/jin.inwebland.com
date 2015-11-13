'use strict';
var webpack = require('webpack');

var ORIGIN = __dirname + '/dev';
var APP = __dirname;

module.exports = {
    // config goes here
    module:{
      loaders: [
      { test: /\.scss$/, loader: "style!css!sass"},
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.jsx$/, loader: 'babel-loader'},
      { test: /\.png$/, loader: 'url-loader'}
      ]
    },

    context: ORIGIN,
    entry: {
      app: [
      'webpack/hot/dev-server',
      './entry.js'
      ]
    },
    output: {
      path: APP,
      filename: 'bundle.js'
    },

    devServer: {
      port: 1991,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
    ],
    externals: {
        //don't bundle the 'react' npm package with our bundle.js
        //but get it from a global 'React' variable
        'react': 'React'
      },
      resolve: {
        extensions: ['', '.js', '.jsx']
      }
    };