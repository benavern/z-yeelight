import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { discover } from './store/actions/lights'

import Header from './components/Header'
import LightsPage from './pages/LightsPage'
import LightPage from './pages/LightPage'
import AboutPage from './pages/AboutPage'

class App extends Component {

  componentDidMount() {
    this.props.discover()
  }

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

const mapDispatchToProps = dispatch => ({
  discover: () => dispatch(discover())
})

export default connect(null, mapDispatchToProps)(App)
