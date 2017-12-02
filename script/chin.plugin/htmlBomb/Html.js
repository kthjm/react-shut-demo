import React from 'react'

export default props => (
  <html lang="ja">
    <head>
      <title>{'title'}</title>
      {props.favicons}
      {props.onerror}
    </head>
    <body>
      <div id="app" />
      {props.dll}
      <script src="./bundle.js" />
    </body>
  </html>
)
