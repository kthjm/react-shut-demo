import React from 'react'
import Atra from 'atra'
import * as Shuts from 'react-shut'

const firstUpper = (str) => str.slice(0,1).toUpperCase() + str.slice(1)

const Quit = ({ fn }) => <button {...a("QUIT", { onClick: fn })}>{"quit"}</button>

export default ({
  choisedKey,
  mountWithShut,
  onCome,
  onQuit
}) => {
  const componentName = `ShutFrom${firstUpper(choisedKey)}`
  const Shut = Shuts[componentName]
  return (
    <Shut {...{ mountWithShut, onCome, onQuit, Quit }}>
      <div {...a("TEXT", { dangerouslySetInnerHTML: { __html: innerHTML(componentName) } })} />
    </Shut>
  )
}


const a = Atra({
  TEXT: {
    style: {
      fontSize: 50
    },

  },
  QUIT: {
    style: {
      position: "absolute",
      top: 50,
      right: 50,
      fontSize: 50
    }
  }
})

// duration: "3s",
// background: "#393939",
// touchWidthRatio: 0.8,
// quitWidthRatio: 0.2,

const innerHTML = (componentName) => `
<p>${componentName}</p>
<br>
<br>
<br>
<br>
<span>hoge</span>
<br>
<br>
<br>
<br>
<span>hoge</span>
<br>
<br>
<br>
<br>
<span>hoge</span>
<br>
<br>
<br>
<br>
<span>hoge</span>
<br>
<br>
<br>
<br>
<span>hoge</span>
<br>
<br>
<br>
<br>
<span>hoge</span>
<br>
<br>
<br>
<br>
<span>hoge</span>
<br>
<br>
<br>
<br>
<span>hoge</span>
<br>
<br>
<br>
<br>
<span>hoge</span>
<br>
<br>
<br>
<br>
<span>hoge</span>`