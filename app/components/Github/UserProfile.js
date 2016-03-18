/**
 * Created by kevin on 27/02/2016.
 */

import React, { Component } from 'react';

class UserProfile extends Component {
    render(){
        console.log('BIO', this.props.bio);
        return (
            <div>
                <div> USER PROFILE! </div>
                <p>Username: {this.props.username}</p>
            </div>

        )
    }
}

export default UserProfile;
