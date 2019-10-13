import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import LightPage from './pages/LightPage'
import AboutPage from './pages/AboutPage'

// import { SketchPicker } from 'react-color'
// const { ipcRenderer } = window.require('electron')

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div className="app">
          <Header />

          <main>
            <div className="container">
              <Switch>
                <Route path="/" exact component={HomePage} />

                <Route path="/light/:id" component={LightPage} />

                <Route path="/about" exact component={AboutPage} />

                <Redirect to="/"/>
              </Switch>
            </div>
          </main>

          <Footer/>
        </div>
      </HashRouter>
    )
  }
}

export default App
