import React, { Component } from 'react'
import LightItem from '../components/LightItem'
import { connect } from 'react-redux'
import { discover } from '../store/actions/lights'

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
      <div id="lights">
        <div className="list">
          { list }
        </div>

        <button onClick={ this.props.discover }>Rechercher</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  lights: Object.values(state.lights.list),
  loading: state.lights.loading
})

const mapDispatchToProps = dispatch => ({
  discover: () => dispatch(discover())
})

export default connect(mapStateToProps, mapDispatchToProps)(LightsPage)
