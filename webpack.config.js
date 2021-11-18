var path = require("path");
var webpack = require("webpack");

module.exports = env => {
  let lib = env.lib;
  return {
    entry: lib ? "./packages/index.js" : "./examples/main.js", // 入口文件
    output: {
      // 修改输出文件到 dist 下

      path: path.resolve(__dirname, "./dist"),
      publicPath: "/dist/",
      filename: lib ? "index.js" : "build.js",
      library: lib ? "packages" : "",
      libraryTarget: lib ? "umd" : "var",
      umdNamedDefine: !!lib
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["vue-style-loader", "css-loader"]
        },
        {
          test: /\.vue$/,
          loader: "vue-loader",
          options: {
            loaders: {}
            // other vue-loader options go here
          }
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]?[hash]"
          }
        },
        {
          test: /\.(woff2?|ttf)$/,
          loader: "url-loader"
        }
      ]
    },
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm.js"
      },
      extensions: ["*", ".js", ".vue", ".json"]
    },
    devServer: {
      historyApiFallback: true,
      noInfo: true,
      overlay: true
    },
    performance: {
      hints: false
    },
    devtool: "#eval-source-map"
  };
};

if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map";
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
