const miniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: { main: "./src/js/main.js", plotly: "./src/js/plotly.js" },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../web/static"),
  },
  plugins: [
    new miniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "src/scss/signin.css",
          to: path.resolve(__dirname, "../web/static"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: miniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
