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
        port: 3000,
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Credentials' : true
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test: /\.(png|jp(e*)g|svg|ico)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
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