const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "assests/[name].css",
    }),

    new CopyPlugin({
      patterns: [
        { from: "public/manifest.json", to: "" },
        { from: "public/service-worker.js", to: "" },
        { from: "public/icon-192x192.png", to: "assets" },
        { from: "public/icon-256x256.png", to: "assets" },
        { from: "public/icon-384x384.png", to: "assets" },
        { from: "public/icon-512x512.png", to: "assets" },
      ],
    }),

    new DotenvWebpackPlugin({
      path: path.resolve(__dirname, ".env"),
      safe: true,
      systemvars: true,
      defaults: false,
    }),
  ],
  devServer: {
    allowedHosts: path.join(__dirname, "dist"),
    compress: true,
    port: 3005,
    historyApiFallback: true,
  },
};
