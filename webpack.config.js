const path = require('path');
const outputDir = './dist';

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.join(__dirname, outputDir),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ["@babel/preset-env", "@babel/react"]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["css-loader"]
            }
        ]
    },
    devtool: "source-map"
}