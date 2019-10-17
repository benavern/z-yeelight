import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

export default class LightItem extends Component {
  render () {
    return (
      <Link
        to={`/light/${ this.props.light.id }`}
        className="light-item"
        style={{backgroundColor: this.getRGBColor()}}>
        <div className="light-icon">
          <Icon name="unknown-bulb" inline />
        </div>

        <div className="light-info">
          <div className="name">
            Bureau
          </div>

          <div className="location">
            { this.props.light.location }
          </div>
        </div>

        <Icon name="arrow-right" inline />
      </Link>
    )
  }

  getRGBColor() {
    // https://codegolf.stackexchange.com/a/43159
    const r = this.props.light.rgb >> 16
    // eslint-disable-next-line no-mixed-operators
    const g = this.props.light.rgb >> 8 & 255
    const b = this.props.light.rgb & 255

    return `rgba(${r}, ${g}, ${b}, .8)`
  }
}
