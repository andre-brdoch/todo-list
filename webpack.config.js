const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "app.[hash].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      icons: path.resolve(__dirname, "assets/icons"),
      store: path.resolve(__dirname, "src/store"),
      vue: "vue/dist/vue.esm.js"
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  }
};
