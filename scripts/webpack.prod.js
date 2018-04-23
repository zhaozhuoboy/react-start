const path = require('path');
const config = require('../config/config.js');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//抽取css
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//打包时先清除dist文件夹里的内容
const CleanWebpackPlugin = require('clean-webpack-plugin');
//开启分析
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = webpackMerge(webpackBaseConfig, {
    devtool: false,
    entry: {
        app: [
            'babel-polyfill',
            path.resolve(__dirname, '../src/index.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[chunkhash:8].js',
        publicPath: './',
    },
    module: {
        rules:[
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'less-loader'
                    ],
                    publicPath:'../'
                }),
                include: [path.resolve(__dirname, '../src')]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '生产配置',
            template: path.resolve(__dirname, '../src/index.html'),
            favicon: path.resolve(__dirname, '../src/favicon.ico'),
            minify: {
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,//是否删除日志
            }
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true,
        }),
        //配置全局变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ]
})