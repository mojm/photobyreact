"use srtice"
const path = require('path');
const srcPath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './build');


module.exports = {
	devtool: 'eval-source-map',
	entry: path.resolve(srcPath, 'main.js'),
	output: {
		path: buildPath,
		filename: 'main.js',
		publicPath: 'build/'
	},

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
				test: /\.(png|jpg|gif|woff|woff2)$/,
				loader: 'url-loader?limit=8192'
			}

		],
		resolve: {
			extensions: ['', '.js', 'jsx']
		}
	}

}