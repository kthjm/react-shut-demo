import React from 'react'
import Atra from 'atra'
import IndexButton from './IndexButton.jsx'
import ShutButton from './ShutButton.jsx'
import ShutUse from './ShutUse.jsx'

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
    const shutbutton = this.createShutButton()
    const shutcontents = this.createShutContents()
    const indexbuttons = this.createIndexButtons()

    const ref = this.rootref
    const rootHeight = this.nowRootHeight || 0
    const isMobile = this.props.isMobile

    return (
      <div {...a('ROOT', { ref })}>
        <div {...a('MAIN', { style: { height: rootHeight * 0.88 } })}>
          <span {...a('SIGN')}>{`from ${this.state.choised}`}</span>
          {shutbutton}
          {shutcontents}
        </div>
        <div {...a('UNDER', { style: {
          height: rootHeight * 0.12,
          width: !isMobile && "40%",
          float: !isMobile && "right"
        } })}>
          {indexbuttons}
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
    return ["right", "left", "bottom", "top"].map((type, index) =>
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

    return shut && <ShutUse {...{
      choisedKey: choised,
      mountWithShut: shut === "shut",
      onCome: this.listeners['SHUT_ON_COME'],
      onQuit: this.listeners['SHUT_ON_QUIT'],
    }} />
  }
}

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
      top: 8,
      left: 10,
      fontSize: 30,
      color: "gray"
    }
  },
  UNDER: {
    style: {
      background: 'rgba(255, 255, 255, 0.12)'
    }
  }
})