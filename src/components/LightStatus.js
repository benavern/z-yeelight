import React, { Component } from 'react'

export default class LightStatus extends Component {
  render() {
    return (
      <div className={`light-status ${ this.props.status }`}></div>
    )
  }
}
