const path = require('path');
const webpack = require('webpack');
const config = require('../config/config');

module.exports = {
    entry: {
        app: '../src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production'? config.dev.publicPath:config.build.publicPath
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json','.less','css'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'components': path.resolve(__dirname,'../src/components'),
            'page': path.resolve(__dirname, '../src/page'),
            'utils': path.resolve(__dirname, '../src/utils')
        }
    },
    // externals: {
    //     echarts: 'Echarts'//第三方插件库使用外部扩展引入，在html文件中引入cdn地址，在这里注册
    // },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: [path.resolve(__dirname,'../src')]
            },
            {
                test: /\.less$/,
                loader: ['style-loader','css-loader','less-loader'],
                include: [path.resolve(__dirname, '../src')]
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/,
                use: [{
                    loader: 'file-loader?name=images/img_[hash:8].[ext]'
                }]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',//自动加载模块，而不必到处 import 
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dll/app-manifest.json')
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor",//把第三方库抽出打包成vendor.js
        //     minChunks: Infinity,
        // })
    ]
}