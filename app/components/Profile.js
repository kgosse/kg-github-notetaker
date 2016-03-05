/**
 * Created by kevin on 27/02/2016.
 */

import React, { Component } from 'react';

import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';

import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';


let Profile  = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState(){
        return {
            notes: [1, 2, 3],
            bio: {
                name: 'Kévin Gossé'
            },
            repos: ['a', 'b', 'c']
        };
    },

    componentDidMount(){
        this.ref = new Firebase('https://kg-github-notetaker.firebaseio.com/');
        let childRef = this.ref.child(this.props.params.username);
        this.bindAsArray(childRef, 'notes');
    },

    componentWillUnmount(){
        this.unbind('notes');
    },

    render(){
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={this.props.params.username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={this.props.params.username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes username={this.props.params.username} notes={this.state.notes} />
                </div>
            </div>
        );
    }
});

export default Profile;
