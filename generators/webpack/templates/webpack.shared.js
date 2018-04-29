const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              includePaths: ["<%=source %>/styles"]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve("<%= source %>"), "node_modules"]
  },
  stats: {
    colors: true
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      template: "<%= source%>/index.html"
    })
  ]
};
