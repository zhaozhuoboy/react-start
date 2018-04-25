const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            'react',
            'react-dom',
            'echarts'
        ]
    },
    output: {
        path: path.join(__dirname, '../dll'),
        filename: '[name].js',
        library: '[name]'
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            name: "[name]",
            path: path.join(__dirname, "../dll/manifest.json"),
        })
    ]
}