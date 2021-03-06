"use srtice"
const path = require('path');
const srcPath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './build');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const WebpackDevServer = require('webpack-dev-server');


module.exports = {
	devtool: 'eval-source-map',
	entry: path.resolve(srcPath, 'main.js'),
	output: {
		path: buildPath,
		filename: 'main.js',
		publicPath: './'
	},

	devServer: {
		port: 8000,
		progress: true
	},

	resolve: {
		extensions: ['', '.js', 'jsx']
	},

	plugins: [
		new HtmlWebpackPlugin(),
		new ImageminPlugin({
			optipng: {
				optimizationLevel: 3
			},
			pngquant: {
				quality: '95-100'
			}
		})
	],

	module: {
		preLoader: [{
			test: /\.(js|jsx)$/,
			include: srcPath,
			loader: 'eslint-loader'

		}],
		loaders: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}, {
				test: /\.css$/,
				loader: 'style-loader!css-loaderautoprefixer-loader?{browsers: ["last 2 version"]}'
			}, {
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader?{browsers: ["last 2 version"]}!sass-loader?outputStyle=expanded'
			}, {
				test: /\.json$/,
				loader: 'json-loader'
			}, {
				test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=8192'
			}

		]
	}

}