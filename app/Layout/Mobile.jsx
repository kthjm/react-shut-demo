import React from 'react'
import Atra from 'atra'

export default ({ children }) => (
  <div {...a('ROOT', { style: { height: window.innerHeight } })}>
    <div {...a('COVER')} />
    <div {...a('FIELD')}>
      <div {...a('HEAD_WRAP')}>
        <span {...a('HEAD')}>{'react-shut'}</span>
      </div>
      <div {...a('WRAP')}>{children}</div>
    </div>
  </div>
)

// const BACKGROUND_URL = "https://78.media.tumblr.com/10ca4bbb4e3ea166f427db56316e6250/tumblr_oty24eUIg91rqe0rbo1_540.gif"
// const BACKGROUND_URL = "https://78.media.tumblr.com/234e66d78ac64e3ba19aa5d29665276a/tumblr_oy2eexpfts1w7cvmoo1_500.gif"
const BACKGROUND_URL =
  'https://78.media.tumblr.com/21f2573ec2f5d75e15164dae0dffd907/tumblr_p02gpiOozq1qzgjfco1_540.jpg'

const a = Atra({
  ROOT: {
    style: {
      position: 'relative',
      backgroundImage: `url(${BACKGROUND_URL})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  },

  COVER: {
    style: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      // backgroundColor: 'rgba(0,0,0,0.8)'
      backgroundColor: 'rgba(0,0,0,0.96)'
    }
  },

  FIELD: {
    style: {
      position: 'relative',
      // top: '8%',
      height: '100%',
      maxWidth: '92%',
      margin: 'auto'
      // background: "rgba(237, 251, 255, 0.88)"
    }
  },

  HEAD_WRAP: {
    style: {
      height: '14%',
      textAlign: 'center'
    }
  },

  HEAD: {
    style: {
      position: 'relative',
      top: '39.5%',
      color: '#ffffff',
      fontSize: 38,
      fontFamily: 'sans-serif',
      letterSpacing: 16
    }
  },

  WRAP: {
    style: {
      position: 'relative',
      height: '83.5%',
      margin: 'auto',
      background: 'rgba(123, 124, 124, 0.15)'
    }
  }
})
