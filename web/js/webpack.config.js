const path = require("path");
const webpack = require("webpack"); //to access built-in plugins
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    skCalendar: "./src/sk.calendar.js",
    skBase: "./src/sk.base.js",
    skDatePicker: "./src/sk.datePicker.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../static/js"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
              sassOptions: {
                includePaths: [path.resolve(__dirname, './node_modules')],
              }
            },
          },
        ],
      },
    ],
  },
  devtool: false,
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: "bootstrap/dist/css/bootstrap.min.css",
          to: path.resolve(__dirname, "../static/css"),
          context: "node_modules",
        },
      ],
    }),
  ],
};
