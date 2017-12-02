import React from 'react'
import Atra from 'atra'
import IndexButton from './IndexButton.jsx'
import ShutButton from './ShutButton.jsx'
import ShutContent from './ShutContent.jsx'
import * as Shuts from 'react-shut'

const types = ["right", "left", "bottom", "top"]
const firstUpper = (str) => str.slice(0,1).toUpperCase() + str.slice(1)

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.rootref = function(target) { this.rootHeight = () => target.clientHeight }.bind(this)
    this.state = {
      choised: "right",
      right: false,
      left: false,
      bottom: false,
      top: false,
    }
  }

  componentWillMount() {
    this.listeners = {}
    listeners.forEach(([name, ho]) => { this.listeners[name] = ho(this) })
  }

  render() {
    const ref = this.rootref
    const rootHeight = this.nowRootHeight || 0
    const isMobile = this.props.isMobile

    return (
      <div {...a('ROOT', { ref })}>
        <div {...a('MAIN', { style: { height: rootHeight * 0.88 } })}>
          <span {...a('SIGN')}>{`from ${this.state.choised}`}</span>
          {this.createShutButton()}
          {this.createShutContents()}
        </div>
        <div {...a('UNDER', { style: {
          height: rootHeight * 0.12,
          width: !isMobile && "40%",
          float: !isMobile && "right"
        } })}>
          {this.createIndexButtons()}
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.nowRootHeight = this.rootHeight()
    this.forceUpdate()
  }

  componentDidUpdate() {
    const nextRootHeight = this.rootHeight()
    if(this.nowRootHeight !== nextRootHeight) {
      this.nowRootHeight = nextRootHeight
      this.forceUpdate()
    }
  }

  listenerType(){ return this.props.isMobile ? "onTouchEnd" : "onClick" }

  createShutButton() {
    return <ShutButton {...{
      listener: this.listeners['SHUTS_SWITCH'],
      listenerType: this.listenerType()
    }} />
  }

  createIndexButtons() {
    return types.map((type, index) =>
      <IndexButton key={index} {...{
        listener: this.listeners['INDEX_SWITCH'],
        listenerType: this.listenerType(),
        dataType: type,
        choised: type === this.state.choised,
        size: this.props.isMobile ? 100 : 50
      }} />
    )
  }

  createShutContents() {
    const { choised } = this.state
    const shut = this.state[choised]

    if(shut){
      const componentName = `ShutFrom${firstUpper(choised)}`
      const Shut = Shuts[componentName]
      return(
        <Shut {...{
          Quit,
          // duration: "3s",
          background: "rgb(31, 31, 42)",
          // touchWidthRatio: 0.8,
          // quitWidthRatio: 0.2,
          mountWithShut: shut === "shut",
          onCome: this.listeners['SHUT_ON_COME'],
          onQuit: this.listeners['SHUT_ON_QUIT']
        }}>
          <ShutContent {...{ componentName }} />
        </Shut>
      )
    }
  }
}

const Quit = ({ fn }) => <button {...a("QUIT", { onClick: fn })}>{"quit"}</button>

const listeners = [
  ['INDEX_SWITCH', react =>
    e => {
      const nowType = react.state.choised
      const nextType = e.target.dataset.type
      return nowType !== nextType && react.setState({ choised: nextType })
    }
  ],
  ['SHUTS_SWITCH', react =>
    () => {
      const nowType = react.state.choised
      return react.setState({ [nowType]: "shut" })
    }
  ],
  ['SHUT_ON_COME', react =>
    (e) => {
      console.log("onCome");
      const nowType = react.state.choised
      return react.state[nowType] === "shut" && react.setState({ [nowType]: true })
    }
  ],
  ['SHUT_ON_QUIT', react =>
    (e) => {
      console.log("onQuit");
      const nowType = react.state.choised
      return react.setState({ [nowType]: false })
    }
  ]
]

const a = Atra({
  ROOT: {
    style: {
      height: '100%'
    }
  },
  MAIN: {
    style: {
      position: 'relative'
    }
  },
  SIGN: {
    style: {
      position: "absolute",
      top: 30,
      left: 40,
      fontSize: 55,
      color: "#cacaca",
      letterSpacing: 9
    }
  },
  UNDER: {
    style: {
      background: 'rgba(255, 255, 255, 0.12)'
    }
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