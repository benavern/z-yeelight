import React, { Component } from 'react'
import './App.css'
import { SketchPicker } from 'react-color'
const { ipcRenderer } = window.require('electron')

class App extends Component {

  constructor() {
    super()
    this.state = {
      lights: [],
      customColor: { r: 255, g: 255, b: 255 },
    }

    this.custom({ rgb: this.state.customColor })

    ipcRenderer.on('discover:success', (e, lights) => {
      console.log(lights)
      this.setState({ lights })
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Set color</h1>
        <button onClick={this.red} className="red">Rouge</button>
        <button onClick={this.green} className="green">Vert</button>
        <button onClick={this.blue} className="blue">Bleu</button>

        <hr />

        <h1>Set custom color</h1>
        <SketchPicker
          color={ this.customColor }
          onChangeComplete={ this.custom }>
          test
        </SketchPicker>

        <hr/>

        <h1>Discover</h1>
        <button onClick={this.discover}>Discover</button>
        {this.state.lights.map(light => (
          <pre className="debug" key={light.id}>{JSON.stringify(light, null, 2)}</pre>
        ))}
      </div>
    )
  }

  red () {
    ipcRenderer.send('set:red')
  }

  green () {
    ipcRenderer.send('set:green')
  }

  blue () {
    ipcRenderer.send('set:blue')
  }

  custom({ rgb }) {
    ipcRenderer.send('set:custom', rgb)
  }

  discover() {
    ipcRenderer.send('discover:start')
  }
}

export default App
