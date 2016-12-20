module.exports = {
	entry: './src/test.js',
	output: {
		path: './',
		filename: 'bundle.js'
	},
	module:{
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: ['babel-loader'],
			query:{
				presets: ['latest','es2015', 'react']
			}
		}
		]
	}
}