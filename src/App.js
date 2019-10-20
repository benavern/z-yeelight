import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { discover } from './store/actions/lights'
import { getFavorites } from './store/actions/db'

import Header from './components/Header'
import Footer from './components/Footer'
import FavoritesPage from './pages/FavoritesPage'
import AddToFavoritesPage from './pages/AddToFavoritesPage'
import LightPage from './pages/LightPage'
import DiscoveredPage from './pages/DiscoveredPage'

class App extends Component {

  componentDidMount() {
    this.props.discover()
    this.props.getFavorites()
  }

  render() {
    return (
      <HashRouter>
        <Header />

        <main>
          <Switch>
            <Route path="/favorites" exact component={FavoritesPage} />
            <Route path="/favorites/add/:id" component={AddToFavoritesPage} />

            <Route path="/discovered" exact component={DiscoveredPage} />

            <Route path="/light/:id" component={LightPage} />

            <Redirect to="/favorites"/>
          </Switch>
        </main>

        <Footer />
      </HashRouter>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  discover: () => dispatch(discover()),
  getFavorites: () => dispatch(getFavorites())
})

export default connect(null, mapDispatchToProps)(App)
