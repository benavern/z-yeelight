import React, { Component } from 'react'
import LightItem from '../components/LightItem'
import { connect } from 'react-redux'

class LightsPage extends Component {

  render() {
    let list
    if (this.props.loading) {
      list = (<div className="center">Recherche en cours...</div>)
    } else if (this.props.lights.length) {
      list = this.props.lights.map(light => (
        <LightItem key={ light.id } light={ light } />
      ))
    } else {
      list = (<div className="center">Aucune ampoule détectée.</div>)
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
