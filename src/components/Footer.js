import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <footer id="footer">
        <nav className="menu">
          <NavLink to="/mine">Favorites</NavLink>

          <NavLink to="/network">Discovered</NavLink>
        </nav>
      </footer>
    )
  }
}
