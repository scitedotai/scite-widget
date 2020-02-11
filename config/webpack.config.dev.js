const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  watch: true,
  entry: './src/index.js',
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader'
      },
      {
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
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    }
  }
}
