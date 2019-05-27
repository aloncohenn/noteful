import React from 'react';
import Note from '../Note/Note';
import './NotePageMain.css';
import AppContext from '../AppContext'

class NotePageMain extends React.Component {
  static contextType = AppContext

  render() {
    const note = this.context.notes.find(
      note => note.note_id === Number(this.props.match.params.note_id)
    );
    
    return (
      <section className="NotePageMain">
        <Note
          id={note.note_id}
          name={note.name}
          modified={note.modified}
          content={note.content}
        />
        <div className="NotePageMain__content">{note.content}</div>
    </section>
    );
  }
}

export default NotePageMain