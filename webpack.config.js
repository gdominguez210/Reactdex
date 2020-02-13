const path = require('path');
const outputDir = './dist/';

module.exports = {
    entry: path.resolve(__dirname, "src/frontend", "index.js"),
    output: {
        path: path.join(__dirname, outputDir),
        filename: 'bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: '/'
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
    node: {
        fs: "empty"
    },
    devtool: "source-map"
}