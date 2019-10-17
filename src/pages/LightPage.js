import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPower, setColor, setBright } from '../store/actions/light'
import LightControl from '../components/LightControl'

class LightPage extends Component {

  render() {
    const currentLight = this.props.currentLight(this.props.match.params.id)

    if (!currentLight) {
      return (
        <div id="light">
          <p className="center">This light bulb does not exist.</p>
        </div>
      )
    }

    return (
      <div id="light">
        <LightControl
          light={currentLight}
          setPower={(...args) => this.setPower(...args)}
          setColor={(...args) => this.setColor(...args)}
          setBright={(...args) => this.setBright(...args)} />
      </div>
    )
  }

  setColor(light, color) {
    this.props.setColor(light, color.rgb)
  }

  setBright(light, bright) {
    const brightness = Math.max(1, bright) // yeelight bulb does not support 0% brightness
    this.props.setBright(light, brightness)
  }

  setPower(light, power) {
    this.props.setPower(light, power)
  }
}

const mapStateToProps = state => ({
  currentLight: (id) => state.lights.list[id]
})

const mapDispatchToProps = dispatch => ({
  setPower: (light, power) => dispatch(setPower(light, power)),
  setColor: (light, color) => dispatch(setColor(light, color)),
  setBright: (light, brightness) => dispatch(setBright(light, brightness))
})

export default connect(mapStateToProps, mapDispatchToProps)(LightPage)
