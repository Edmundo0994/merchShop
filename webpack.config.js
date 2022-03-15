const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DotenvWebpackPlugin = require("dotenv-webpack");
const webpack = require("webpack");

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
    new DotenvWebpackPlugin({
      path: "./.env",
      safe: true,
      systemvars: true,
      defaults: false,
    }),
    new webpack.DefinePlugin({
      "process.env": {
        MERCH_APP_CLIENT_ID: JSON.stringify(process.env.MERCH_APP_CLIENT_ID),
        MERCH_APP_DATA_CLIENT_TOKEN: JSON.stringify(process.envMERCH_APP_DATA_CLIENT_TOKEN),
        MERCH_APP_APIKEY: JSON.stringify(process.env.MERCH_APP_APIKEY),
        FIREBASE_TOKEN: JSON.stringify(process.env.FIREBASE_TOKEN),
      },
    }),
  ],
  devServer: {
    allowedHosts: path.join(__dirname, "dist"),
    compress: true,
    port: 3005,
    historyApiFallback: true,
  },
};
