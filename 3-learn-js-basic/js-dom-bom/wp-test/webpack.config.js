const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'main.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
// };


module.exports = {
    entry: './src/app.js',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'app'),
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
            MiniCssExtractPlugin.loader
          ],
        },
      ],
    },
  };