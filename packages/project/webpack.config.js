const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        commonjs_cjs: './src/commonjs-cjs.js',
        commonjs_esm: './src/commonjs-esm.js',
        commonjs_umd: './src/commonjs-umd.js',
        esmodule_cjs: './src/esmodule-cjs.js',
        esmodule_esm: './src/esmodule-esm.js',
        esmodule_umd: './src/esmodule-umd.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test-on-demand',
        })
    ]
};