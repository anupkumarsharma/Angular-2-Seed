var loaders = require("./loaders.build");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
const LoaderOptionsPlugin = require("webpack/lib/LoaderOptionsPlugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CommonsChunkPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        app: ['./src/main.ts'],
        vendors: ['./src/vendors.ts']
    },
    output: {
        filename: '[name].js',
        path: 'dist'
    },
    devtool: 'source-map',
    resolve: {
        //  root: __dirname,
        extensions: ['.ts', '.js', '.json']
    },
    plugins: [
        // chunk the bundle
        new CommonsChunkPlugin({
            name: 'vendors',
            minChunks: 3
        }),
        // Lint
        new webpack.LoaderOptionsPlugin({
                options: {
                    tslint: {
                        emitErrors: true,
                        failOnHint: true,
                    },
                    // autoprefix CSS 
                    postcss: [
                        autoprefixer({
                            browsers: ['last 2 version']
                        })
                    ]
                }
            }

        ),
        new ExtractTextPlugin('app.css'),
        // mimify
        new webpack.optimize.UglifyJsPlugin({
            warning: false,
            mangle: true,
            comments: false
        }),
        // inject 
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        // provide 
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