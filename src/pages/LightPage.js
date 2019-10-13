import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import { connect } from 'react-redux'
import { setPower, setColor, setBright } from '../store/actions/light'
import { SliderPicker, AlphaPicker } from 'react-color'

class LightPage extends Component {

  state = {
    color: { r: 51, g: 51, b: 51, a:1 },
  }

  componentDidMount() {
    const currentLight = this.props.currentLight(this.props.match.params.id)

    if(currentLight) {
      const rgb = { // https://codegolf.stackexchange.com/a/43159
        r: currentLight.rgb >> 16,
        // eslint-disable-next-line no-mixed-operators
        g: currentLight.rgb >> 8 & 255,
        b: currentLight.rgb & 255,
        a: currentLight.bright / 100
      }

      this.setState({
        color: rgb
      })
    } else {
      this.setState({
        color: { r: 51, g: 51, b: 51, a: 1 }
      })
    }
  }

  render() {
    const currentLight = this.props.currentLight(this.props.match.params.id)

    if (!currentLight) {
      return (
        <p>Chargement en cours...</p>
      )
    }

    return (
      <div id="single">
        <Link to="/lights" className="back">
          <Icon name="arrow-left" />
        </Link>

        <h1>Light</h1>

        <button onClick={() => this.props.setPower(currentLight, true)}>
          Allumer
        </button>

        <button onClick={() => this.props.setPower(currentLight, false)}>
          Eteindre
        </button>

        <SliderPicker
          color={ this.state.color }
          onChangeComplete={ (color) => this.setColor(currentLight, color) } />

        <AlphaPicker
          color={ this.state.color }
          onChangeComplete={ (color) => this.setBright(currentLight, color) }/>
      </div>
    )
  }

  setColor(light, color) {
    this.setState({ color: color.rgb })
    this.props.setColor(light, color.rgb)
  }

  setBright(light, color) {
    this.setState({ color: color.rgb })
    const brightness = Math.max(1, color.rgb.a * 100)
    this.props.setBright(light, brightness)
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
