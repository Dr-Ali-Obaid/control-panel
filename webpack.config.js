const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');



module.exports = {
  entry: {
    'index': './src/index.js',
    'assets/js/banner': './src/assets/js/banner.js',
    'assets/js/tabs': './src/assets/js/tabs.js',
    'assets/js/upload': './src/assets/js/upload.js',
    'assets/js/chart': './src/assets/js/chart.js'
  },

  output: {
    path: path.resolve(__dirname, './app'),
    filename: '[name].js',
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
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /fonts/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name][ext]'
        }
      },

      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
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
      filename: 'index.html',
      chunks: ['index','assets/js/banner', 'assets/js/chart', 'assets/js/tabs']
    }),
    new HtmlWebpackPlugin({
      template: './src/add-product.html',
      filename: 'add-product.html',
      chunks: ['index', 'assets/js/upload']
    }),
    new HtmlWebpackPlugin({
      template: './src/add-user.html',
      filename: 'add-user.html',
      chunks: ['index', 'assets/js/upload']
    }),
    new HtmlWebpackPlugin({
      template: './src/products.html',
      filename: 'products.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/users.html',
      filename: 'users.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/orders.html',
      filename: 'orders.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/button.html',
      filename: './components/button.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/components/textfield.html',
      filename: './components/textfield.html',
      chunks: ['index']
    }),

    new HtmlWebpackPlugin({
      template: './src/components/card.html',
      filename: './components/card.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/banner.html',
      filename: './components/banner.html',
      chunks: ['index', 'assets/js/banner']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/list.html',
      filename: './components/list.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/tabs.html',
      filename: './components/tabs.html',
      chunks: ['index', 'assets/js/tabs']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/upload.html',
      filename: './components/upload.html',
      chunks: ['index', 'assets/js/upload']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/help.html',
      filename: './components/help.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/summary.html',
      filename: './components/summary.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/actions.html',
      filename: './components/actions.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/sidebar.html',
      filename: './components/sidebar.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/table.html',
      filename: './components/table.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      template: './src/components/chart.html',
      filename: './components/chart.html',
      chunks: ['index', 'assets/js/chart']
    }),
    
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname,'./src/components/help.html'),
      location: 'help',
      template_filename: ['index.html','add-product.html','products.html', 'users.html', 'orders.html', 'add-user.html']
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname,'./src/components/sidebar.html'),
      location: 'sidebar',
      template_filename: ['index.html', 'add-product.html', 'products.html', 'users.html', 'orders.html', 'add-user.html']
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname,'./src/components/tabs.html'),
      location: 'tabs',
      template_filename: ['index.html']
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname,'./src/components/chart.html'),
      location: 'chart',
      template_filename: ['index.html']
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname,'./src/components/banner.html'),
      location: 'banner',
      template_filename: ['index.html']
    }),

    new MiniCssExtractPlugin({
      filename: 'style.css',   
    }),



  ],

};
