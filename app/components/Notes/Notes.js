/**
 * Created by kevin on 27/02/2016.
 */

import React, { Component } from 'react';

class Notes extends Component {
    render(){
        return (
            <div>
                <p>NOTES</p>
                <p>{this.props.notes}</p>
            </div>
        )
    }
}

export default Notes;
