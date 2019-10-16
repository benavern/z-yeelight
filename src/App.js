import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { discover } from './store/actions/lights'

import Header from './components/Header'
import Footer from './components/Footer'
import LightsPage from './pages/LightsPage'
import LightPage from './pages/LightPage'

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
            <Route path="/mine" exact component={LightsPage} />
            <Route path="/network" exact component={LightsPage} />

            <Route path="/light/:id" component={LightPage} />

            <Redirect to="/mine"/>
          </Switch>
        </main>

        <Footer />
      </HashRouter>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  discover: () => dispatch(discover())
})

export default connect(null, mapDispatchToProps)(App)
