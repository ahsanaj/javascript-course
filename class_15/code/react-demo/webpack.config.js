// Create and export a config object
// Entry
// Output
// Mode (defined that in package.jspn scripts)
// Module rules (loaders)

const config = {
    entry: ["./app/js/index.js"],
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [{
            // regular expression
            test: /\.js$/,
            exclude: /node_modules/,
            loader: ["babel-loader"]
        }]
    },
    devServer: {
        contentBase: "./dist"
    }
};

module.exports = config;