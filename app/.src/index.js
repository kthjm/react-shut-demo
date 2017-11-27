import React from 'react'
import { render } from 'react-dom'
import { Desktop, Mobile } from './Layout'
import App from './App.js'

const isMobile = navigator.userAgent.toLowerCase().includes('mobile')
const Layout = isMobile ? Mobile : Desktop

render(
  <Layout>
    <style>{`body { margin: 0px; }`}</style>
    <App {...{ isMobile }} />
  </Layout>,
  document.getElementById('app')
)
