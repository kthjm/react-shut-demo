import React from 'react'
import Atra from 'atra'

export default ({
  listenerType,
  listener,
  dataType,
  choised,
  size
}) =>
  <div {...a("ROOT")}>
    <div
      {...a("BUTTON", {
        [listenerType]: listener,
        'data-type': dataType,
        style: {
          width: size,
          height: size,
          backgroundColor: choised ? "rgb(102, 111, 17)" : 'rgba(255, 255, 255, 0.55)'
        }
      })}
    />
  </div>


const a = Atra({
  ROOT: {
    style: {
      display: 'inline-block',
      width: '25%',
      height: '100%',
      textAlign: 'center'
    }
  },
  BUTTON: {
    style: {
      display: 'inline-block',
      position: 'relative',
      top: "21.5%"
    }
  },
})