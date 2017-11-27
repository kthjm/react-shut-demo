import React from 'react'
import Atra from 'atra'

export default ({ children }) => <div {...a('WRAP')}>{children}</div>

const a = Atra({
  WRAP: {
    style: {
      position: 'relative',
      height: window.innerHeight
    }
  }
})
