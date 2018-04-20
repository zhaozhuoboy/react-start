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
        extensions: ['.js', '.jsx', '.json','.less','css'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'components': path.resolve(__dirname,'../src/components'),
            'page': path.resolve(__dirname, '../src/page')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
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
                    loader: 'file-loader?name=img_[hash:8].[ext]'
                }]
            }
        ]
    }
}