import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header'
import LightsPage from './pages/LightsPage'
import LightPage from './pages/LightPage'
import AboutPage from './pages/AboutPage'

// import { SketchPicker } from 'react-color'

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Header />

        <main>
          <Switch>
            <Route path="/lights" exact component={LightsPage} />

            <Route path="/lights/:id" component={LightPage} />

            <Route path="/about" exact component={AboutPage} />

            <Redirect to="/lights"/>
          </Switch>
        </main>
      </HashRouter>
    )
  }
}

export default App
