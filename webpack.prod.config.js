const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const VENDOR_LIBS = [
  'axios', 'lodash', 'react', 'react-dom', 'react-redux',
  'react-redux-multilingual', 'react-redux-toastr', 'react-router',
  'react-router-redux', 'redux', 'redux-auth-wrapper',
  'redux-devtools-extension', 'redux-form', 'redux-pack',
  'redux-promise-middleware', 'semantic-ui-react'
];

module.exports = {
  entry: {
    bundle: [
      'babel-polyfill',
      './client/index.js'
    ],
    vendor: VENDOR_LIBS,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        }),
        test: /\.css$/
      }
    ]
  },
  performance: {
    hints: false
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true,
    inline: true,
    historyApiFallback: true,
    open: true,
    quiet: true,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      title: 'Boilerplate',
      template: 'public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('style.css'),
  ]
};
