// Provide way for the user to specify a location by zip code and distance.
// Display a list (or table) of businesses that match the search parameters.
import React, { Component } from 'react'

class Location extends Component {
  constructor() {
    super()
    this.state = {
      zip: "",
      distance: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
      e.preventDefault();
      console.log('time to hit API', this.state.zip, this.state.distance)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="number" name="zip" onChange={this.handleChange} value={this.state.zip} />
          <select type="number" name="distance" onChange={this.handleChange} value={this.state.distance}>Miles from zip:
              <option>Select</option>
              <option>1</option>
              <option>5</option>
              <option>10</option>
              <option>15</option>
          </select>
          <button type="submit">Enter</button>
        </form>        
        <div>Return search value</div>
      </div>
    )
  }
}

export default Location;