var webpack = require("webpack");

module.exports = {
    entry : {
        app: ["./src/app.js"]
    },
    output : {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    module : {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins : [
        new webpack.optimize.UglifyJsPlugin({ minimize: true, sourceMap: true })
    ]
};


//    "start": "webpack-dev-server --host 0.0.0.0 --hot --inline --watch-poll --content-base dist"