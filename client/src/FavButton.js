//Users can "favorite" each result from query
//Need to update to maintain state

import React, { Component } from 'react';

class FavButton extends Component {
    constructor() {
      super();
      this.state = {
        faved: false
      };
      this.handleClick = this.handleClick.bind(this);
    } 
    
    handleClick() {
      this.setState({
        faved: !this.state.faved
      });
    }
    
    render() {
      const label = this.state.faved ? 'Yep!' : 'Nah'
      return (
        <div>
          <button onClick={this.handleClick}>Enter</button>
          <div>
            Worth trying? {label}
          </div>
        </div>
      );
    }
  }
  

export default FavButton;