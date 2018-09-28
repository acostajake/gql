import React, { Component } from 'react'
import './App.css'
import Location from './Locations'
import CategoryFilter from './CategoryFilter'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import Results from './Query'

const client = new ApolloClient({
  uri: 'http://localhost:3030/'
})

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
          <Results client={client}/>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
