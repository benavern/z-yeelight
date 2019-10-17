import React, { Component } from 'react'
import Icon from './Icon'
import Toggle from './Toggle'

export default class LightControl extends Component {
  render() {
    return (
      <div className="light-control" style={{backgroundColor: this.getRGBColor()}}>
        <div className="light-control-header">
          <div className="light-icon">
            <Icon name="unknown-bulb" inline />
          </div>

          <div className="light-info">
            <div className="name">
              Bureau
            </div>

            <div className="location">
              {this.props.light.location}
            </div>
          </div>

          <div className="light-switch">
            <Toggle value={this.props.light.status} onClick={() => this.togglePower()} />
          </div>
        </div>

        <div className="light-control-content">

        </div>
      </div>
    )
  }

  togglePower() {
    this.props.setPower(this.props.light, this.props.light.status !== 'on')
  }

  getRGBColor() {
    if (this.props.light.status !== 'on') {
      return 'rgba(0, 0, 0, .5)'
    }
    // https://codegolf.stackexchange.com/a/43159
    const r = this.props.light.rgb >> 16
    // eslint-disable-next-line no-mixed-operators
    const g = this.props.light.rgb >> 8 & 255
    const b = this.props.light.rgb & 255

    return `rgba(${r}, ${g}, ${b}, .8)`
  }
}

