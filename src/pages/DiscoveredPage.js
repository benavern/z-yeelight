import React, { Component } from 'react'
import LightItem from '../components/LightItem'
import { connect } from 'react-redux'

class LightsPage extends Component {

  render() {
    let list
    if (this.props.loading) {
      list = (<div id="favorites"><p className="center">Looking for light bulbs...</p></div>)
    } else if (this.props.lights.length) {
      list = this.props.lights.map(light => (
        <LightItem key={ light.id } light={ light } unknown />
      ))
    } else {
      list = (<div id="favorites"><p className="center">No light bulb found.</p></div>)
    }

    return (
      <div id="favorites">
        <div className="list">
        { list }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lights: Object.keys(state.lights.list)
    .filter(light => !Object.keys(state.db.favorites).includes(light))
    .map(light => state.lights.list[light]),
  loading: state.lights.loading
})

export default connect(mapStateToProps)(LightsPage)
