
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',

	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.[hash].js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html'
		})
	],

	devServer: {
		contentBase: path.join(__dirname, 'build')
	}
};
