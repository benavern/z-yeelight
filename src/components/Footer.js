import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from './Icon'

export default class Header extends Component {
  render() {
    return (
      <footer id="footer">
        <nav className="menu">
          <NavLink to="/favorites">
            <div className="nav-icon">
              <Icon name="heart" />
            </div>

            <div className="nav-text">
              Favorites
            </div>
          </NavLink>

          <NavLink to="/discovered">
            <div className="nav-icon">
              <Icon name="question" />
            </div>

            <div className="nav-text">
              Discovered
            </div>
          </NavLink>
        </nav>
      </footer>
    )
  }
}
