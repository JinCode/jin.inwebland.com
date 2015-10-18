'use strict';
var webpack = require('webpack');

var ORIGIN = __dirname + '/dev';
var APP = __dirname + '/build';

module.exports = {
    // config goes here
    module:{
        loaders: [
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },

    context: ORIGIN,
    entry: {
        app: [
            'webpack/hot/dev-server',
            './entry.js']
    },
    output: {
        path: APP,
        filename: 'bundle.js'
    },

    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};