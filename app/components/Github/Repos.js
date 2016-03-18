/**
 * Created by kevin on 27/02/2016.
 */

import React, { Component } from 'react';

class Repos extends Component {
    render(){
        console.log('REPOS', this.props.repos);
        return (
            <div>
                <p>REPOS</p>
            </div>
        )
    }
}

export default Repos;