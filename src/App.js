import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
const { ipcRenderer } = window.require('electron')

class App extends Component {

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
}

export default App
