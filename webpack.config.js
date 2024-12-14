const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src") + "/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "./dist/",
    // publicPath: "auto" - means by default in webpack 5
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/, // No quotes needed
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 3 Kilobytes
          },
        },
      },
      {
        test: /\.txt$/,
        type: "asset/source",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin(),
    new TerserPlugin(),
    new MiniCssExtractPlugin({
       filename: "style.css"
    })
  ]
};

// const path = require('path');
// const CleanPlugin = require('clean-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: {
//     bundle: path.resolve(__dirname, "src") + "/app.js",
//   },
//   output: {
//     filename: "[name].js",
//     path: path.resolve(__dirname, 'assets', 'scripts'),
//     publicPath: './dist/'
//   },
//   devtool: 'inline-source-map',
//   module: {
//     rules: [
//       {
//         test: /\.m?js$/,
// //      test: /\.(js|mjs|jsx|ts|tsx)$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               [
//               '@babel/preset-env',
//               {
//               useBuiltIns:'usage',
//               corejs:{ version: 3}
//               }
//              ]
//             ]
//           }
//         }
//       }
//     ]
//   },
//   plugins: [new CleanPlugin.CleanWebpackPlugin()]
// };
