import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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

const Any = ({ onAnySelected }) => (
  <Query query={GET_ANY}>
    {({ loading, error, data }) => {
      if (loading) return 'loading...'
      if (error) return `Error ${error.message}`
      console.log(data)

      return (
        <select name="name" onChange={onAnySelected}>
          {data.business.name.map(business => (
            <option key={business.name} value={business.id}>
              {business.name}
            </option>
          ))}
        </select>
      )
    }}
  </Query>
)

export default Any;