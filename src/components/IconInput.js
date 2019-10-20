import React, { Component } from 'react'
import Icon from './Icon'

export default class AddToFavorites extends Component {

  constructor(props) {
    super(props)
    this.iconsList = [
      'bedroom',
      'livingroom',
      'kitchen',
      'desk',
      'logo',
      'unknown-bulb',
      'refresh',
      'close',
      'heart',
      'question',
      // 'arrow-right',
      // 'arrow-left',
      'plus'
    ]

    this.selected = this.props.value
  }

  render() {
    return (
      <div className="icons-list">
        {
          this.iconsList.map((icon, i) => (
            <button
              key={i}
              className={this.selected === icon ? 'selected' : ''}
              onClick={(e) => this.handleIconClick(e, icon)}>
              <Icon name={icon} inline/>
            </button>
          ))
        }
      </div>
    )
  }

  handleIconClick (e, icon) {
    e.preventDefault()
    this.selected = icon
    this.props.onSelect(icon)
  }
}
