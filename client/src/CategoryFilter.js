//Allow filtering of businesses by category

import React, { Component } from 'react'
// import gql from 'graphql-tag'

//Implement Mutation here?
// const YelpQuery = gql`
//   {
//     categories {
//       category {
//         alias
//       }
//     }
//   }
// `

class CategoryFilter extends Component {
  constructor() {
    super()
    this.state = {
      alias: ''
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
    e.preventDefault()
      //need to take in value and pass to Graphql query for results
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="category" onChange={this.handleChange} value={this.state.alias} />
          <button type="submit">Enter</button>
        </form>
      </div>
    )
  }
}

export default CategoryFilter
