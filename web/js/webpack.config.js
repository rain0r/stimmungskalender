const path = require("path");
const webpack = require("webpack"); //to access built-in plugins

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
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};
