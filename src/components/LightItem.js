import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import { get } from 'lodash'

export default class LightItem extends Component {
  render () {

    let item
    if (this.props.unknown) {
      item = {
        baseUrl: '/favorites/add',
        icon: 'unknown-bulb',
        name: 'Unknown',
        color: 'rgba(50, 40, 50, .75)',
        cta: 'plus'
      }
    } else {
      item = {
        baseUrl: '/light',
        icon: get(this.props, 'light.favData.icon', 'unknown-bulb'),
        name: get(this.props, 'light.favData.name', 'Unknown'),
        color: this.getRGBColor(),
        cta: 'arrow-right'
      }
    }

    return (
      <Link
        to={`${item.baseUrl}/${ this.props.light.id }`}
        className="light-item"
        style={{backgroundColor: item.color}}>
        <div className="light-icon">
          <Icon name={item.icon} inline />
        </div>

        <div className="light-info">
          <div className="name">
            {item.name}
          </div>

          <div className="location">
            { this.props.light.location }
          </div>
        </div>

        <Icon name={item.cta} inline />
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
