'use strict';
var webpack = require( 'webpack' );
var path = require( 'path' );
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
    context: __dirname,
    entry: {
        bundle: './static/index.js',
        styles: './static/main.sass'
    },
    output: {
        filename: '[name].js',
        path: './static/build',
        library: '[name]'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: '#cheap-module-source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.sass$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('styles.css', {
            allChunks: true
        })
    ],

    watch: true,

    watchOptions: {
        aggregateTimeout: 50
    },

    devServer: {
        host: 'localhost',
        port: 8080,
        // contentBase: __dirname + '/static'
    },

};
module.exports = webpackConfig;