import React from 'react'
import Atra from 'atra'

export default ({
  listenerType,
  listener
}) =>
  <div {...a("ROOT")}>
    <button {...a("BUTTON", { [listenerType]: listener })}>
      {"シャッ"}
    </button>
  </div>


const a = Atra({
  ROOT: {
    style: {
      textAlign: "center",
      position: "relative",
      top: "40%"
    }
  },
  BUTTON: {
    style: {
      cursor: 'pointer',
      fontSize: 100,
      letterSpacing: 20,
      color: "#ffffff",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      borderWidth: 8,
      borderColor: "#242424",
      padding: "6px 40px"
    }
  }
})