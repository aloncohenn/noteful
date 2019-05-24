import React from 'react';
import Note from '../Note/Note';
import './NotePageMain.css';

export default function NotePageMain(props) {
  console.log('note from notepagemain', props.note);
  return (
    <section className="NotePageMain">
      <Note
        id={props.note.note_id}
        name={props.note.name}
        modified={props.note.modified}
        content={props.note.content}
      />
      <div className="NotePageMain__content">{props.note.content}</div>
    </section>
  );
}

NotePageMain.defaultProps = {
  note: {
    content: ''
  }
};
