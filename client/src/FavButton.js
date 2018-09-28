//Add a way for users to "favorite" certain businesses (state should be completely client-side)

import React, { Component } from 'react';

class FavButton extends Component {
    constructor() {
        super();
        this.state = {
            isFav: false,
            icon: false //replace from library to animate
        }        
    }

    fav() {
        console.log('like or unlike')
        if(this.state.isFav === false) this.setState({ icon: true })
        if(!this.state.isFav === true) this.setState({ icon: false })
    }

    render() {
        return (
            <div>
                <button onClick={this.fav.bind(this)}>Click to like</button>
                {this.state.icon === false ? (
                    <div>False</div>
                ) : (
                    <div>True</div>
                )
                }
            </div>
        )
    }
}

export default FavButton;