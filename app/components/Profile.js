/**
 * Created by kevin on 27/02/2016.
 */

import React, { Component } from 'react';

import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';
import helpers from '../utils/helpers';

import ReactFireMixin from 'reactfire';
import Firebase from 'firebase';


let Profile  = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState(){
        return {
            notes: [1, 2, 3],
            bio: {},
            repos: []
        };
    },
    init: function(username){
        var childRef = this.ref.child(username);
        this.bindAsArray(childRef, 'notes');

        helpers.getGithubInfo(username)
            .then(function(data){
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                })
            }.bind(this))
    },
    componentDidMount(){
        this.ref = new Firebase('https://kg-github-notetaker.firebaseio.com/');
        this.init(this.props.params.username);
    },
    componentWillReceiveProps: function(nextProps){
        this.unbind('notes');
        this.init(nextProps.params.username);
    },
    componentWillUnmount(){
        this.unbind('notes');
    },
    handleAddNote (newNote){
        this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
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
                    <Notes username={this.props.params.username}
                           notes={this.state.notes}
                           addNote={this.handleAddNote}
                    />
                </div>
            </div>
        );
    }
});

export default Profile;
