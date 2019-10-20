import React, { Component } from 'react'
import Icon from '../components/Icon'
import IconInput from '../components/IconInput'

export default class LightForm extends Component {

  constructor (props) {
    super(props);

    this.state = {
      name: '',
      icon: null
    }
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleIconChange(icon) {
    this.setState({ icon })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onAdd(this.state)
  }

  render() {
    return (
      <div className="light-form">
        <div className="light-form-header">
          <div className="light-icon">
            <Icon name="unknown-bulb" inline />
          </div>

          <div className="light-info">
            <div className="name">
              Add to favorites
            </div>

            <div className="location">
              {this.props.light.location}
            </div>
          </div>
        </div>

        <form className="form" onSubmit={e => this.handleSubmit(e)}>
          <div className="form-item name-input">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="My light"
              value={ this.state.name }
              onChange={e => this.handleNameChange(e)} />
          </div>

          <div className="form-item icon-input">
            <label>Icon</label>
            <IconInput
              value={this.state.icon}
              onSelect={icon => this.handleIconChange(icon)} />
          </div>

          <div className="form-item submit center">
            <button
              type="submit"
              disabled={!this.state.icon || this.state.name === ''}>
              ADD
            </button>
          </div>
        </form>
      </div>
    )
  }
}
