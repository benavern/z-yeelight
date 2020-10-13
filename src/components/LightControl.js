import React, { Component } from 'react'
import iro from '@jaames/iro'
import Icon from './Icon'
import Toggle from './Toggle'
import { get } from 'lodash'

export default class LightControl extends Component {

  constructor(props) {
    super(props)
    this.colorPickerRef = React.createRef();
    this.colorPicker = null;
  }

  componentDidMount() {
    this.colorPicker = new iro.ColorPicker(this.colorPickerRef.current, {
      width: 230,
      color: this.getRgba(),
      borderWidth: 1,
      layout: [
        { component: iro.ui.Wheel },
        {
          component: iro.ui.Slider,
          options: { sliderType: 'alpha' }
        },
      ]
    })

    this.colorPicker.on('input:end', e => this.setColor(e))
  }

  componentWillUnmount() {
    this.colorPicker.off()
  }

  render() {

    const item = {
      icon: get(this.props, 'light.favData.icon', 'unknown-bulb'),
      name: get(this.props, 'light.favData.name', 'Unknown')
    }

    console.log(this.props.light)

    return (
      <div className="light-control" style={{backgroundColor: this.getBackgroundColor()}}>
        <div className="light-control-header">
          <div className="light-icon">
            <Icon name={item.icon} inline />
          </div>

          <div className="light-info">
            <div className="name">
              {item.name}
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
          <div className="color-picker" ref={this.colorPickerRef}></div>
        </div>
      </div>
    )
  }

  togglePower() {
    this.props.setPower(this.props.light, this.props.light.status !== 'on')
  }

  setColor(color) {
    const newBright = Math.round(color.rgba.a * 100)
    if (newBright === this.getRgba().a * 100) {
      this.props.setColor(this.props.light, color)
    } else {
      this.props.setBright(this.props.light, newBright)
    }
  }

  getBackgroundColor() {
    if (this.props.light.status !== 'on') {
      return 'rgba(0, 0, 0, .5)'
    }
    const { r, g, b } = this.getRgb()
    return `rgba(${r}, ${g}, ${b}, .8)`
  }

  getRgb() {
    // https://codegolf.stackexchange.com/a/43159
    return {
      r: this.props.light.rgb >> 16,
      // eslint-disable-next-line no-mixed-operators
      g: this.props.light.rgb >> 8 & 255,
      b: this.props.light.rgb & 255
    }
  }

  getRgba() {
    return {
      ...this.getRgb(),
      a: Math.round(this.props.light.bright) / 100
    }
  }
}

