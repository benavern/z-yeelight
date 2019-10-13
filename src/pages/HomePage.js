import React, { Component } from 'react'
const { ipcRenderer } = window.require('electron')

export default class HomePage extends Component {

  constructor() {
    super()
    this.state = {
      lights: []
    }
  }

  componentDidMount () {
    ipcRenderer.on('discover:success', (e, lights) => {
      this.setState({ lights })
    })
    this.discover()
  }

  render() {
    return (
      <div id="#home">
        <button onClick={this.discover}>Reload</button>

        <div className="list">
        {
          this.state.lights.map(light => (
            <div className="list-item" key={light.id}>
              <button onClick={() => this.setName(light)}>Rename</button>

            </div>
            // <pre className="debug" key={light.id}>{JSON.stringify(light, null, 2)}</pre>
          ))
        }
        </div>
      </div>
    )
  }

  discover() {
    ipcRenderer.send('discover:start')
  }

  setName(light, name = 'anonymous light') {
    if (light) {
      ipcRenderer.send('set:name', { light, name })
    }
  }
}
