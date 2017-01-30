var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [{
    test: /\.ts$/,
    loader: 'tslint-loader',
    enforce: "pre"
}, {
    // load and process TS 
    test: /\.ts(x?)$/,
    loader: 'ts-loader'
}, {
    // bundle all the style
    test: /\.css$/,
    loader: 'style-loader!css-loader'
}, {
    //bundle all the scss
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader!sass-loader'
    })
}, {
    //copy the html 
    test: /\.html$/,
    exclude: /node_modules/,
    loader: 'raw-loader'
}, {
    //copy the fonts as url
    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
}, {
    //copy the files and bundle it
    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'file-loader'
}, {
    //copy the images as seperate chunks
    test: /\.(jpg|jpeg|gif|png)$/,
    exclude: /node_modules/,
    loader: 'url-loader?limit=1024&name=images/[name].[ext]'
}];