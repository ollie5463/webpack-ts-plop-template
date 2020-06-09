const path = require('path');

module.exports = {
    entry: './src/App.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'production',
    devServer: {
        open: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: "source-map",
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
}