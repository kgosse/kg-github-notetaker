/**
 * Created by kevin on 17/03/2016.
 */

import React, { Component } from 'react';

class AddNote extends Component {
    _setRef =  (ref) => {
        this.note = ref;
    };

    _handleSubmit = () => {
        var newNote = this.note.value;
        this.note.value = '';
        this.props.addNote(newNote)
    };

    render(){
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Add New Note" ref={this._setRef}/>
                <span className='input-group-btn'>
                    <button className="btn btn-default" type="button" onClick={this._handleSubmit}>Submit</button>
                </span>
            </div>
        )
    }

}

AddNote.PropTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
};

export default AddNote;