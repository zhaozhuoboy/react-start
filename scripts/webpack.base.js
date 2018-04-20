const path = require('path');
const webpack = require('webpack');
const config = require('../config/config');


module.exports = {
    entry: {
        app:'../src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'? config.dev.publicPath:config.build.publicPath
    },
    resolve: {
        extensions: ['.js','.jsx','.json'],
        alias: {
            'src': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname,'../src')]
            }
        ]
    }
}