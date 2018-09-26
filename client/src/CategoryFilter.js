//Allow filtering of businesses by category.
import React, { Component } from 'react'

class CategoryFilter extends Component {
  constructor() {
    super()
    this.state = {
      category: ""
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
      console.log('filter API call')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="category" onChange={this.handleChange} value={this.state.category} />
          <button type="submit">Enter</button>
        </form>        
        <div>{this.state.category}</div>
      </div>
    )
  }
}

export default CategoryFilter;