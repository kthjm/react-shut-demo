import React from 'react'
import Atra from 'atra'

export default ({ componentName }) =>
  <div {...a("TEXT", { dangerouslySetInnerHTML: { __html: innerHTML(componentName) } })} />


const a = Atra({
  TEXT: {
    style: {
      fontSize: 50,
      color: "#ffffff"
    }
  }
})

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