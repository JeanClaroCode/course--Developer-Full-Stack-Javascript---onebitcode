const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    galaxy: "./src/galaxy.js",
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"],
      },
    ],
  },

  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    liveReload: true,
  },
};