/**
 * Created by kevin on 17/03/2016.
 */

import React, { Component } from 'react';
import { hashHistory } from 'react-router';

class SearchGithub extends Component {

    _handleSubmit = () => {
        let username = this.usernameRef.value;
        this.usernameRef.value = '';
        hashHistory.push("profile/" + username);
    };

    render(){
        return (
            <div className="col-sm-12">
                <form onSubmit={this._handleSubmit}>
                    <div className="form-group col-sm-7">
                        <input type="text" className="form-control" ref={(e) => this.usernameRef = e } />
                    </div>
                    <div className="form-group col-sm-5">
                        <button type="submit" className="btn btn-block btn-primary">Search Github</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchGithub;