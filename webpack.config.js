const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '/bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.js$/,
                use: 'eslint-loader',
                enforce: 'pre',
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    loader: ['css-loader', 'postcss-loader']
                }),
                exclude: /node_modules/
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html', hash: true}),
        new ExtractTextPlugin({filename: 'bundle.css', disable: false, allChunks: true})
    ],

    devServer: {
        contentBase: path.join(__dirname, 'build'),
        historyApiFallback: true
    }
};
