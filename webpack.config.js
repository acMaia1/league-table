module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        },
        { test: /\.html$/, loader: "html-loader" },
        { test: /\.css$/, loader: "style!css" }
      ]
    },
    devtool: "#inline-source-map"
}