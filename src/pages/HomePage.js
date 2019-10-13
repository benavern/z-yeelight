import React, { Component } from 'react'
const { ipcRenderer } = window.require('electron')

export default class HomePage extends Component {

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
    return (
      <div id="#home">
        <button onClick={this.discover.bind(this)} disabled={this.state.loading}>Reload</button>

        <div className="list">
        {
          this.state.lights.map(light => (
            <div className="list-item" key={light.id}>
              { light.location }
              <button onClick={() => this.setName(light)}>Rename</button>
            </div>
          ))
        }
        </div>
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
