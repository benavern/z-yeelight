import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { SketchPicker } from 'react-color'
const { ipcRenderer } = window.require('electron')

class App extends Component {

  constructor() {
    super()
    this.customColor = { r: 255, g: 255, b: 255 }
    this.custom({ rgb: this.customColor })
  }

  render() {
    return (
      <div className="app">
        <header>
          <img src={logo} className="logo" alt="logo" />
        </header>
        
        <p>
          On va maintenant pouvoir s'amuser avec notre petite lampe :)
        </p>

        <button onClick={this.red} className="red">Rouge</button>
        <button onClick={this.green} className="green">Vert</button>
        <button onClick={this.blue} className="blue">Bleu</button>

        <hr />

        <SketchPicker
          color={ this.customColor }
          onChangeComplete={ this.custom }>
          test
        </SketchPicker>
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
}

export default App
