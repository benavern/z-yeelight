import React, { Component } from 'react'

export default class Icon extends Component {
  render() {
    const classes = [
      'icon',
      this.props.name,
      this.props.inline ? 'inline' : ''
    ].join(' ').trim()

    if (this.props.name === 'arrow-right') {
      return (
        <svg
          className={classes}
          viewBox="0 0 32 32">
          <path
            d="M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z"
            fill="currentcolor"/>
        </svg>
      )
    }

    return (<></>)
  }
}


