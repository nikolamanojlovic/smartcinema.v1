const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports tells what will be exported for use elsewhere
module.exports = {
    // entry is the file we want to load
    entry: __dirname + path.sep + 'src' + path.sep + 'index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + path.sep + 'dist'
    },
    resolve: {
        extensions: ['*', '.js']
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.html$/,
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(ico|png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }
            }
        ],
    },
    stats: { children: false },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + path.sep + 'public' + path.sep + 'index.html',
            filename: __dirname + path.sep + 'dist' + path.sep + 'index.html',
            inject: 'body'
        })
    ],
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    externals: {
        // global app config object, used for communication with server
        config: JSON.stringify({
            apiUrl: 'http://localhost:8080'
        })
    }
};