import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className="toggle" onClick={e => this.props.onClick(e)}>
        <div className={`state ${this.props.value}`}></div>
      </div>
    )
  }
}
