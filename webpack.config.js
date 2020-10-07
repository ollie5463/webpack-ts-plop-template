const path = require('path');

module.exports = {
    entry: './src/App.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        open: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules(?!\/@bolt)/,
                use: [
                    {
						loader: 'babel-loader',
						options: {}, // Empty options uses babel.config.js
					},
                    {
                        loader: "ts-loader",
                        options: {}
                    }
                ]
            },{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {}, // Empty options uses babel.config.js
					},
				],
			}
        ]
    }
}