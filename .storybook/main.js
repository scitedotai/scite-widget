
// .storybook/main.js

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  "stories": [
    "../**/*.stories.js",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ], webpackFinal: async (config, { configType }) => {
    config.module.rules=[      {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: 'babel-loader'
    },{
      test: /\.css/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === 'development'
          }
        },
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        }
      ]
    }];
    config.plugins.push(    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }))

    // Return the altered config
    return config;
  },
}