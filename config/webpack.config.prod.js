const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserJSPlugin = require('terser-webpack-plugin')
const devConfig = require('./webpack.config.dev')

module.exports = {
  ...devConfig,
  mode: 'production',
  watch: false,
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
  }
}
