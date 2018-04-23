const path = require('path');
const config = require('../config/config.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBaseConfig = require('./webpack.base');
require('babel-polyfill');

module.exports = webpackMerge(webpackBaseConfig,{
    // mode:'development',
    devtool: 'cheap-source-map',
    entry: {
        app: [
            'babel-polyfill',
            'webpack-hot-middleware/client?reload=true?http://localhost:' + config.dev.port, 
            path.resolve(__dirname, '../src/index.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'app.js',
        publicPath: config.dev.publicPath,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'React-Starter',
            template: path.resolve(__dirname, '../src/index.html'),
            favicon: path.resolve(__dirname,'../src/favicon.ico'),
            minify: {
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        //配置全局变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev')
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:' + config.dev.port}),
    ]
})