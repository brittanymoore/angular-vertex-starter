const webpack = require('webpack');
const path = require('path');

// constants
const OUTPUT_PATH = './dev';
const SOURCE_PATH = './src';

module.exports = {

    entry: {
        'main':'./src/main.ts'
    },

    output: {
        filename:'[name].bundle.js',
        sourceMapFilename:'[name].map',
        path:path.resolve(__dirname, OUTPUT_PATH),
        pathinfo:true// devtool: eval
    },

    resolve: {
        extensions: [ '.ts', '.js' ]
    },

    devtool:'eval',

    module: {
        rules: [
            { test: /\.ts$/, use: [ 'awesome-typescript-loader' ]}
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            path.resolve(__dirname, SOURCE_PATH),
            {}
        )
    ],

    devServer: {
        contentBase: OUTPUT_PATH,
        port: 3000
    }

}