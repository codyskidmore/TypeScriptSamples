var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, './syntax_samples/scripts'),
        filename: './bundle.js'
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
          { test: /\.ts$/, exclude: /node_modules/, use: 'ts-loader' }
          ,{ test: /\.ts$/, enforce: 'pre', exclude: /node_modules/, use: 'tslint-loader' }
        ]
      }
};