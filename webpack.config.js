const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const BundleAnalyzerPlugin = require(
  "webpack-bundle-analyzer"
).BundleAnalyzerPlugin;

module.exports = env => {
  return {
    entry: "./src/index.js",
    output: { path: path.resolve(__dirname, "build"), filename: "/bundle.js" },
    module: {
      rules: [
        { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
        {
          test: /\.js$/,
          use: "eslint-loader",
          enforce: "pre",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            loader: [ "css-loader", "postcss-loader" ]
          }),
          exclude: /node_modules/
        }
      ]
    },
    resolve: env === "production"
      ? {
        alias: {
          react: "preact-compat/dist/preact-compat",
          "react-dom": "preact-compat/dist/preact-compat"
        }
      }
      : {},
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        hash: true,
        minify: { removeComments: true, collapseWhitespace: true }
      }),
      new ExtractTextPlugin({
        filename: "bundle.css",
        disable: false,
        allChunks: true
      }),
      ...(env === "development"
        ? [
          new DashboardPlugin()
        ]
        : []),
      ...(env === "production"
        ? [
          new BundleAnalyzerPlugin({
            analyzerMode: "disabled",
            generateStatsFile: true
          })
        ]
        : [])
    ],
    devServer: {
      contentBase: path.join(__dirname, "build"),
      historyApiFallback: true
    }
  };
};
