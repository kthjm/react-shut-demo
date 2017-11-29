import React from 'react'
import { render } from 'react-dom'
import { Desktop, Mobile } from './Layout'
import Main from './Main'

const isMobile = navigator.userAgent.toLowerCase().includes('mobile')
const Layout = isMobile ? Mobile : Desktop

class Wrap extends React.Component {
  constructor(props) { super(props) }
  componentDidMount() { window.addEventListener('resize', () => this.forceUpdate()) }
  render() { return <Layout><Main {...{ isMobile }} /></Layout> }
}

render(
  <span><style>{`body { margin: 0px; }`}</style><Wrap /></span>,
  document.getElementById('app')
)