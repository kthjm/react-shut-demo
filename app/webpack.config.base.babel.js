import { resolve } from 'path'

const nodeModulesPath = resolve('node_modules')

export default {
  context: process.cwd(),
  entry: [resolve(`app/.src/index.js`)],
  output: { filename: 'bundle.js' },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [nodeModulesPath],
        use: [`babel-loader?cacheDirectory`]
      }
    ]
  }
}
