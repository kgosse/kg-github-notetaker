/**
 * Created by kevin on 27/02/2016.
 */

import React, { Component } from 'react';

class UserProfile extends Component {
    render(){
        return (
            <div>
                <div> USER PROFILE! </div>
                <p>Username: {this.props.username}</p>
                <p>Bio: {this.props.bio.name}</p>
            </div>

        )
    }
}

export default UserProfile;
