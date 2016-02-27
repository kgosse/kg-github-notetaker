/**
 * Created by kevin on 27/02/2016.
 */

import React, { Component } from 'react';

class Repos extends Component {
    render(){
        return (
            <div>
                <p>REPOS</p>
                REPOS: {this.props.repos}
            </div>
        )
    }
}

export default Repos;