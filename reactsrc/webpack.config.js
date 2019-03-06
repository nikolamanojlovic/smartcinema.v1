const path = require("path");
const HWP = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: path.join(__dirname, "/src/index.js"),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist'),
    },
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }]
    },
    plugins: [
        new HWP(
            {template: path.join(__dirname, "/src/index.html")}
        ),
        new webpack.ProvidePlugin({
            "React": "react",
            "React-dom": "ReactDOM"
        }),
    ]
};