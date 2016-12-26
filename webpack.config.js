"use srtice"
const path = require('path');
const srcPath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './build');


module.exports = {
	devtool: 'eval-source-map',
	entry: path.resolve(srcPath, './components/app'),
	output: {
		path: buildPath,
		filename: 'main.js',
		publicPath: 'build/'
	},

	module: {
		loaders: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}

		]
	}

}