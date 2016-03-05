/**
 * Created by kevin on 05/03/2016.
 */

import React from 'react';

class NotesList extends React.Component {
    render(){
        let notes = this.props.notes.map((note, index) => {
            return <li className="list-group-item" key={index}> {note['.value']}</li>
        });

        return (
            <ul className="list-group">
                {notes}
            </ul>
        )
    }
}

export default NotesList;
