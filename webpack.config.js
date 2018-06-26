const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {

    mode: 'none',

    context: path.resolve(__dirname, 'src/js'),

    entry: './index.js',

    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: "app.min.js"

    },
    plugins: [

            new webpack.ProvidePlugin({
                $: 'jquery',
                JQ: 'jquery'
            }),

            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false,
                    output: {
                        comments: false
                    },
                    sourceMap: false
                },
            })
        ],

        resolve:{
            extensions:['.js', '.ts', '.tsx', 'scss']
        },

        module:{
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: { presets: ["es2015"] }
                    }
                },
            ]
        },

        // devtool: 'eval',
        // watch:true
}

