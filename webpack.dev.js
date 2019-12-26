const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    // Define static folder for devserver
    contentBase: path.join(__dirname, 'src/static'),
    // help for hot reload router
    historyApiFallback: true
  }
});
