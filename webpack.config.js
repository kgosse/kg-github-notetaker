var path = require('path');

module.exports = {
    devtool: 'source-map',
    context: path.join(__dirname, 'app'),
    entry: './App.js',
    output: {
        filename: 'public/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }

        ]
    }
};
