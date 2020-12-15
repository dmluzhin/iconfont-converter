const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const IconfontPlugin = require('iconfont-plugin-webpack');

module.exports = {
	mode: process.env.NODE_ENV || 'production', // development, production, none
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({template: './src/index.html'}),
		new IconfontPlugin({
			src: './src/assets/iconfont', // required - directory where your .svg files are located
			family: 'iconfont', // optional - the `font-family` name. if multiple iconfonts are generated, the dir names will be used.
			dest: {
				font: './src/font/[family].[type]', // required - paths of generated font files
				css: './src/css/_iconfont_[family].scss' // required - paths of generated css files
			},
			watch: {
				pattern: 'src/assets/iconfont/**/*.svg', // required - watch these files to reload
				cwd: undefined // optional - current working dir for watching
			},
			cssTemplate: function() {}// optional - the function to generate css contents
		}),
	]
};
