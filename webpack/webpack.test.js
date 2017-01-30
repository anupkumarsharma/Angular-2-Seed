var preloaders = require("./preloaders");
var loaders = require("./loaders");
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: ['./src/main.ts'],
  output: {
    filename: 'build.js',
    path: 'tmp'
  },
  resolve: {
    //root: __dirname,
    extensions: ['.ts', '.js', '.json']
  },
  resolveLoader: {
   // modulesDirectories: ["node_modules"]
  },
  devtool: "source-map-inline",
  plugins: [
     new ExtractTextPlugin('app.css'),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.jquery': 'jquery'
    })
  ],
  module: {
   // preLoaders:preloaders,
    loaders: loaders,
    // postLoaders: [
    //   {
    //     test: /^((?!\.spec\.ts).)*.ts$/,
    //     exclude: /(node_modules|bower_components)/,
    //     loader: 'istanbul-instrumenter'
    //   }
    // ]
  },
  // tslint: {
  //       emitErrors: true,
  //       failOnHint: true
  // }
};

