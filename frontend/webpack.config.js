const path = require('path');
const webpack = require('webpack');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,
  entry: './src/index',
  output: {
    path: path.resolve('./assets/webpack_bundles/'),
    filename: "[name]-[contenthash].js"
  },
  plugins: [
    new BundleTracker({filename: './webpack-stats.json'})
  ],
}
