import React from 'react'
import Atra from 'atra'
import Shut from './react-shut/src'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      shuts: [false, false]
    }

    this.rootHeight = 0
    this.refRoot = this.refRoot.bind(this)

    this.listeners = {}

    this.listeners.switchShuts = () => {
      console.log('hoge')
      const { index, shuts } = this.state
      shuts[index] = !shuts[index]
      console.log(shuts)
      return this.setState({ shuts })
    }

    this.listeners.switchIndex = e => {
      const nowIndex = this.state.index
      const nextIndex = Number(e.target.dataset.index)
      return nowIndex !== nextIndex && this.setState({ index: nextIndex })
    }
  }

  refRoot(target) {
    this.rootHeight = target.clientHeight
  }

  componentDidMount() {
    this.forceUpdate()
  }

  render() {
    const shutButton = this.createShutButton()
    const shutContents = this.createShut()
    const indexButtons = this.createIndexButtons()

    return (
      <div {...a('ROOT')} ref={this.refRoot}>
        <div
          {...a('MAIN', {
            style: {
              height: this.rootHeight * 0.88
            }
          })}
        >
          {shutButton}
          {shutContents}
        </div>
        <div
          {...a('UNDER', {
            style: {
              height: this.rootHeight * 0.12
            }
          })}
        >
          {indexButtons}
        </div>
      </div>
    )
  }

  createShut() {
    const { shuts, index } = this.state
    return shuts[index] && <Shut {...{}}>{'hoge'}</Shut>
  }

  createShutButton() {
    const onClick = this.listeners.switchShuts
    return (
      <div
        {...{
          onClick,
          style: {
            cursor: 'pointer',
            fontSize: 40
          }
        }}
      >
        {this.state.index}
      </div>
    )
  }

  createIndexButtons() {
    const { isMobile } = this.props
    const onClick = this.listeners.switchIndex

    return this.state.shuts.map((n, index) => (
      <div
        key={index}
        {...{
          style: {
            display: 'inline-block',
            width: '50%',
            height: '100%',
            textAlign: 'center'
          }
        }}
      >
        <div
          {...{
            'data-index': index,
            onClick,
            style: {
              display: 'inline-block',
              position: 'relative',
              top: 15,
              background:
                index === 0
                  ? 'rgba(107, 21, 85, 0.55)'
                  : 'rgba(233, 255, 106, 0.55)',
              width: 60,
              height: 60,
              borderRadius: '100%'
            }
          }}
        />
      </div>
    ))
  }
}

const a = Atra({
  ROOT: {
    style: {
      height: '100%'
    }
  },
  MAIN: {
    style: {}
  },
  UNDER: {
    style: {
      background: 'rgba(9, 9, 23, 0.57)'
    }
  }
})
