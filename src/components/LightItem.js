import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LightStatus from './LightStatus'
import Icon from './Icon'

export default class LightItem extends Component {

  render () {
    return (
      <div className="light-item">
        <div className="status">
          <LightStatus status={ this.props.light.status } />
        </div>

        <div className="name">{ this.props.light.location }</div>

        <Link to={`/lights/${ this.props.light.id }`}>
          <Icon name="arrow-right" />
        </Link>
      </div>
    )
  }
}
