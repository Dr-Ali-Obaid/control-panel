const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");



module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './app'),
    filename: 'index.js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'app'),
    },
    compress: true,
    port: 9051,
    devMiddleware: {
      writeToDisk: true,
    },
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // A tool for transforming CSS with JavaScript and it have 
          // a plugin (postcss-preset-env) to lets you convert modern CSS into something most browsers can understand
          // and add prefix to css that required from some browsers
          "postcss-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(woff|woff2|svg|eot|ttf|otf)$/i,
        exclude: /images/,

        type: 'asset/resource',
        generator: {
          filename: './assets/fonts/[name][ext]'
        }
      },

    ],
  },

  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    
      new HtmlWebpackPlugin({
        template: './src/components/button.html',
        filename: './components/button.html'
      }),



    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),

  ],

};
