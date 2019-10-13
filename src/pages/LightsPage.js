import React, { Component } from 'react'
import LightItem from '../components/LightItem'
const { ipcRenderer } = window.require('electron')

export default class LightsPage extends Component {

  constructor() {
    super()
    this.state = {
      lights: [],
      loading: false
    }
  }

  componentDidMount () {
    ipcRenderer.on('discover:success', (e, lights) => {
      console.log('Found lights : ', lights)
      this.setState({ lights, loading: false })
    })
    this.discover()
  }

  render() {
    let list
    if (this.state.loading) {
      list = (<div className="light-item">Recherche en cours...</div>)
    } else if (this.state.lights.length) {
      list = this.state.lights.map(light => (
        <LightItem key={ light.id } light={ light } />
      ))
    } else {
      list = (<div className="light-item">Aucune ampoule détectée.</div>)
    }

    return (
      <div id="lights">
        <div className="list">
          { list }
        </div>
        <button onClick={ this.discover.bind(this) }>Rechercher</button>
      </div>
    )
  }

  discover() {
    this.setState({ loading: true })
    ipcRenderer.send('discover:start')
  }

  setName(light, name = 'anonymous light') {
    if (light) {
      ipcRenderer.send('set:name', { light, name })
    }
  }
}
