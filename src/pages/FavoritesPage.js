import React, { Component } from 'react'
import LightItem from '../components/LightItem'
import { connect } from 'react-redux'

class LightsPage extends Component {

  render() {
    let list
    if (this.props.loading) {
      list = (<div id="favorites"><p class="center">Looking for light bulbs...</p></div>)
    } else if (this.props.lights.length) {
      list = this.props.lights.map(light => (
        <LightItem key={ light.id } light={ light } />
      ))
    } else {
      list = (<div id="favorites"><p class="center">No light bulb found.</p></div>)
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
  lights: Object.values(state.lights.list),
  loading: state.lights.loading
})

export default connect(mapStateToProps)(LightsPage)
