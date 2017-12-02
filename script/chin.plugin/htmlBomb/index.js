import { createElement } from 'react'
import Bomb from './Bomb.js'
import Html from './Html.js'

const { CHIN_ENV, CHIN_OUT } = process.env

const requiresMap = {
  development: ['onerror', 'dll'],
  // production: ['favicons']
  production: []
}

const requires = requiresMap[CHIN_ENV]

const bomb = new Bomb({
  component: Html,
  outpath: require('path').resolve(CHIN_OUT, `index.html`),
  requires
})

if (CHIN_ENV === 'development') {
  bomb.setProp('dll', createElement('script', { src: './dll.js' }))
} else if (!requires.length) {
  bomb._out()
}

export default bomb
