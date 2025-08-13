const path = require("path");

// for the html plug in?
const HtmlWebpackPlugin = require("html-webpack-plugin");

//module.exports
module.exports = {
    entry: "./src/index.js", //main JS entry
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
    mode: "development",
    devServer: {
        static: "./dist",
        open: true, //opens browser automatically
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            title: "Restaurant Page",
            inject: "body",
        }),
    ], 
    //module rules for css?
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    },
                },
            },
            
        ],
    },
};