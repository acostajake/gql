import React, { Component } from 'react'
import './App.css'
import Location from './Locations'
import CategoryFilter from './CategoryFilter'
import Result from './Result'
import ApolloClient from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import gql from 'graphql-tag';
// import Any from './Query'

const client = new ApolloClient({
  uri: 'localhost:3030/'
})

const GET_ANY = gql`
{
    business(id: "Menottis-Venice") {
        name
        location{
          formatted_address
        }
    		id
        coordinates {
            latitude
            longitude
        }
    hours{
      is_open_now
    }
    }
}
`

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Let's Yelp around</h1>
          </header>
          <p className="App-intro">Ready!</p>
          <Location />
          <CategoryFilter />
          <Result />
          {/* <Any /> */}
          <Query query={GET_ANY}>
            {({ loading, error, data }) => {
              if (loading) return 'loading...'
              if (error) return `Error ${error.message}`
              console.log(data)

              return (
                <select name="name">
                  {data.business.name.map(business => (
                    <option key={business.name} value={business.id}>
                      {business.name}
                    </option>
                  ))}
                </select>
              )
            }}
          </Query>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
