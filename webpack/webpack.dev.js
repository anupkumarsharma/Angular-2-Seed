var loaders = require("./loaders.dev");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin")
module.exports = {
    entry: {
        app: ['./src/main.ts'],
        vendors: ['./src/vendors.ts']
    },

    output: {
        filename: '[name].js',
        path: 'dist'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },

    devtool: "inline-eval-cheap-source-map",
    plugins: [
        new CommonsPlugin({
            name: 'vendors',
            minChunks: 3
        }),
        new ExtractTextPlugin('app.css'),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 8080,
            server: {
                baseDir: 'dist'
            },
            ui: false,
            online: false,
            notify: false
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.jquery': 'jquery'
        })
    ],
   module: {
        // load all the files 
        rules: loaders

    },
};