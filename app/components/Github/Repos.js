/**
 * Created by kevin on 27/02/2016.
 */

import React, { Component } from 'react';

class Repos extends Component {
    render(){
        let repos = this.props.repos.map(function(repo, index){
            return (
                <li className="list-group-item" key={index}>
                    {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
                    {repo.description && <p>{repo.description}</p>}
                </li>
            )
        });

        return (
            <div>
                <h3> User Repos </h3>
                <ul className="list-group">
                    {repos}
                </ul>
            </div>
        )
    }
}

export default Repos;