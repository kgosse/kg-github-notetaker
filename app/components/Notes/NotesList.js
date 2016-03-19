/**
 * Created by kevin on 05/03/2016.
 */

import React from 'react';

const NotesList = ({notes}) => {
    return (
        <ul className="list-group">
            {notes.map((note, index) => (
                <li className="list-group-item" key={index}>{note}</li>
            ))}
        </ul>
    )
};

NotesList.propTypes = {
    notes: React.PropTypes.array.isRequired
};

export default NotesList;
