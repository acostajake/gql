import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import FavButton from './FavButton';

//returns results of hard-coded values after hitting Yelp API
const YelpQuery = gql`
  {
    search(term: "coffee", location: "santa monica", radius: 100, limit: 10) {
      business {
        name
        location {
          formatted_address
        }
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
        let array = []
        let resReturn = data.search.business
        for (let item in resReturn) {
          array.push(resReturn[item])
        }
        //returns results of call to API
        return (
          <div>
            {array.map(foundItem => (
              <div key={foundItem.name}>
                {foundItem.name}
                <FavButton />
              </div>
            ))}
          </div>
        )
      }}
    </Query>
)

export default Results
