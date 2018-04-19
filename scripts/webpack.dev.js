const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpackBaseConfig = require('./webpack.base');
require("babel-polyfill");//兼容ie9,10配置

module.exports = webpackMerge(webpackBaseConfig,{
    // mode:'development',
    devtool: 'cheap-source-map',
    entry: {
        app: ['babel-polyfill', 'webpack-hot-middleware/client?reload=true?http://localhost:' + process.env.PORT, path.resolve(__dirname, '../src/index.js')]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.js',
        publicPath: '',
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev')
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:' + process.env.PORT}),
    ]
})