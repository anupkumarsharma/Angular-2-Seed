var path = require('path');
var webpack = require("webpack");
module.exports = {
  entry: {
    app: path.resolve(__dirname, 'src/app/main.ts'),
    vendor: path.resolve(__dirname, 'src/app/vendor.ts')
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
   resolve: {
    extensions: [ '.webpack.js', '.web.js', '.ts', '.js']
  },
  module: {
    loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },

// rules: [
//   {
//     test: /\.ts$/
//     loader: 'awesome-typescript-loader'
//   },
//   {
//     test: /\.css$/
//     loaders: 'style-loader!css-loader'
//   }
// ],
  plugins: [
    // new webpack.ResolverPlugin([
    //     new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    // ], ["normal", "loader"])
  ],
  output: {
    filename: '[name].js',
    publicPath: './assets/',
    path: path.resolve(__dirname, 'dist')
  },
  watchOptions: {
    poll: true
  },
  watch: true,
};