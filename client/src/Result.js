//container for each result given by API
import React, { Component } from 'react';
import FavButton from './FavButton';

class Result extends Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div>
                <div>Query result</div>
                <div>Business:</div>
                <div>Address:</div>
                <div>City:</div>
                <FavButton />
            </div>
        )
    }
}

export default Result;