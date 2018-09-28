import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import FavButton from './FavButton';

const YelpQuery = gql`
  {
    business(id: "Menottis-Venice") {
      name
      location {
        formatted_address
      }
      id
      coordinates {
        latitude
        longitude
      }
      hours {
        is_open_now
      }
    }
  }
`

const Results = () => (
  <Query query={YelpQuery}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>
      //should return data blob when hitting 3030
      console.log(data)
      return (
        <div>
          <div>Business: {data.business.name}</div>
          <div>Address: {data.business.location.formatted_address}</div>
          <FavButton />
        </div>
      )
    }}    
  </Query>
)

export default Results;