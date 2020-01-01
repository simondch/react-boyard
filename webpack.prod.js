const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output : {
    filename: "[name].[hash].js"
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0
    }
  },
  plugins: [
    // we need to define process.env key accessed in react app
    new webpack.DefinePlugin({
      // router public url basename with default value set to root
      'process.env.PUBLIC_URL': process.env.PUBLIC_URL
        ? JSON.stringify(process.env.PUBLIC_URL)
        : JSON.stringify('/')
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: path.resolve(__dirname, 'bundle-analyze/report.html'),
      openAnalyzer: false
    })
  ]
});
