import React, { Component } from 'react'
import { connect } from 'react-redux'
import LightForm from '../components/LightForm'
import { addToFavorites } from '../store/actions/db'

class AddToFavorites extends Component {
  render() {
    const light = this.props.light(this.props.match.params.id)

    if (!light) {
      return (
        <div className="add-to-favorites">
          <p className="center">This bulb does not exist</p>
        </div>
      )
    }

    return (
      <div id="add-to-favorites">
        <LightForm
          light={ light }
          onAdd={ value => this.add(light, value) } />
      </div>
    )
  }

  add (light, value) {
    this.props.addToFavorites(light, value)
  }
}

const mapStateToProps = state => ({
  light: id => state.lights.list[id]
})

const mapDispatchToProps = dispatch => ({
  addToFavorites: (light, favData) => dispatch(addToFavorites(light, favData))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavorites)
