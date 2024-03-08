const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const GasPLugin = require("gas-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const getSrcPath = (filePath) => {
    const src = path.resolve(__dirname, "src");
    return path.posix.join(src.replace(/\\/g, "/"), filePath);
};

const mode = "none"; //production

module.exports = {
    mode,
    context: __dirname,
    entry: getSrcPath("/index.js"),
    output: {
        filename: "code.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        iife: false,
        // scriptType: "module",
    },
    resolve: {
        extensions: [".js"],
    },
    optimization: {
        minimize: false,
        minimizer: [
            new TerserPlugin({
                test: /\.js$/i,
                extractComments: false,
                terserOptions: {
                    ecma: 2020,
                    compress: false,
                    mangle: {
                        reserved: ["global"],
                        keep_fnames: true,
                    },
                    format: {
                        comments: /@customfunctions/i,
                    },
                },
            }),
        ],
    },
    performance: {
        hints: false,
    },
    watchOptions: {
        ignored: ["**/dist", "**/node_modules"],
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: "/node_modules",
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheDirectory: true,
                        cacheCompression: false,
                        plugins: [["@babel/plugin-proposal-object-rest-spread", { losse: true, useBuiltIns: true }]],
                    },
                },
            },
        ],
    },
    plugins: [
        new ESLintPlugin(),
        new webpack.ProgressPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: getSrcPath("**/*/*.html"),
                    to: "[name][ext]",
                    noErrorOnMissing: true,
                },
                {
                    from: getSrcPath("**/*.html"),
                    to: "[name][ext]",
                    noErrorOnMissing: true,
                },
                {
                    from: getSrcPath("../appsscript.json"),
                    to: "[name][ext]",
                },
                {
                    from: getSrcPath("./functions/*.js"),
                    to: "[name][ext]",
                    noErrorOnMissing: true,
                    info: { minimize: true },
                },
            ],
        }),
        new GasPLugin({
            comments: false,
            source: "",
        }),
    ],
};
