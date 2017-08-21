var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app/',
    entry: {
        app: './app.js',
        vendor: [
            'angular',
            'angular-route'
        ]
    },
    output: {
        path: __dirname + '/app/',
        filename: 'app.bundle.js'
    },
    devtool: 'eval',
    watch: true,
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: false,
            compress: false,
            comments: false,
            sourceMap: 'source-map'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js'
        })
    ]
};