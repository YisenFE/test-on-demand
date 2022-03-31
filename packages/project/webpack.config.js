const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        cjs: './test-cjs.js',
        esm: './test-esm.js',
        umd: './test-umd.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '管理输出',
            template: 'index.html'
        })
    ]
};