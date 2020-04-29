var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, './syntax_samples/scripts'),
        filename: './bundle.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
          { test: /\.ts$/, exclude: /node_modules/, use: 'ts-loader' }
        ]
      }
};