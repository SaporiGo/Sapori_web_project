const path = require("path");

module.exports = {
    mode: 'development',
    // entry: path.join(__dirname, './src/index.js'),
    entry: {
        home: './src/index.js',
        pizza: './src/pizza.js',
        deli: './src/deli.js',
        story: './src/story.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        // filename: 'bundle.js',
        filename: './[name].js',
        chunkFilename: './[id].chunk.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }
        ]
    }
}