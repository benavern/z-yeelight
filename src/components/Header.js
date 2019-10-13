import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav className="menu">
          <NavLink to="/lights">Ampoules</NavLink>

          <NavLink to="/about">À propos</NavLink>
        </nav>
      </header>
    )
  }
}
