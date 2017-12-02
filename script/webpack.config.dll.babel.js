import { resolve } from 'path'
import { DllPlugin } from 'webpack'

const VARIABLE = 'dll'
const path = resolve('.local')

export default {
  context: process.cwd(),
  entry: [`react`, `react-dom`, `whatwg-fetch`, `babel-polyfill`],
  output: {
    filename: `${VARIABLE}.js`,
    path,
    library: VARIABLE
  },
  plugins: [
    new DllPlugin({
      path: resolve(path, `${VARIABLE}.manifest.json`),
      name: VARIABLE
    })
  ]
}
