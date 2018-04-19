const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: {
        app:'../src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath:'/'
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