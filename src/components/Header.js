import React, { Component } from 'react'
import Icon from './Icon'
import { connect } from 'react-redux'
import { discover } from '../store/actions/lights'
import { getFavorites } from '../store/actions/db'
const { remote, shell } = window.require('electron')

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <div className="logo-icon move">
            <Icon name="logo" inline />
          </div>

          <div className="logo-texts">
            <div className="logo-copyright">
              Made by
              <a
                href="https://benjamin.caradeuc.info"
                onClick={ this.openMyWebsite }>
                Benjamin
              </a>
            </div>
            <div className="logo-title move">Z-Yeelight</div>
          </div>

          <div className="window-actions">
            <button onClick={ () => this.refresh() }>
              <Icon name="refresh" className={ this.props.loading ? 'rotate' : ''} />
            </button>

            <button onClick={ () => this.quit() }>
              <Icon name="close" />
            </button>
          </div>
        </div>
      </header>
    )
  }

  refresh() {
    this.props.discover()
    this.props.getFavorites()
  }

  openMyWebsite(e) {
    e.preventDefault()
    shell.openExternal('https://benjamin.caradeuc.info')
  }

  quit() {
    remote.getCurrentWindow().close()
  }
}

const mapStateToProps = state => ({
  loading: state.lights.loading
})

const mapDispatchToProps = dispatch => ({
  discover: () => dispatch(discover()),
  getFavorites: () => dispatch(getFavorites())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
