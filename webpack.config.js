var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'build.js'
    },
    externals: {
        jquery: 'window.$'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.vue', '.vuex']
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
            }, {
                loader: "sass-loader",
                options: {
                    sourceMap: true,
                    includePaths: ["node_modules"]
                }
            }]
        }, {
            test: /\.js$/,
            loader: ['babel-loader', 'eslint-loader'],
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'eslint-loader',
                query: {
                    configFile: './.eslintrc'
                },
            }],
        }]
    }
}