import React, { Component } from 'react';
import NotefulForm from '../NotefulForm/NotefulForm';
import './AddNote.css';
import AppContext from '../AppContext';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default class AddNote extends Component {
  static contextType = AppContext;

  static defaultProps = {
    folders: []
  };

  constructor(props) {
    super(props);
    this.state = {
      noteName: '',
      noteValid: false,
      noteContent: '',
      contentValid: false,
      noteFolder: '1',
      validationErrors: {
        noteName: '',
        noteContent: ''
      }
    };
  }
  handleSubmit(event, noteName, noteContent, folderId) {
    event.preventDefault();
    const url = 'https://noteful-client-1.herokuapp.com/api/notes/';
    fetch(url, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: noteName,
        content: noteContent,
        folder_id: folderId
      })
    })
      .then(res => res.json())
      .then(() => {
        this.context.addNote()
        this.props.history.push(`/`)
      })
  }

  validateName(name) {
    let hasError = false;

    if (name.trim().length === 0) {
      hasError = true;
    }

    this.setState({
      noteValid: !hasError
    });
  }

  validateContent(content) {
    let hasError = false;

    if (content.trim().length === 0) {
      hasError = true;
    }

    this.setState({
      contentValid: !hasError
    });
  }

  formValid(name) {
    if (this.state.folderNameValid) {
      this.setState({ folderName: name });
    }
  }

  updateName(name) {
    this.setState({ noteName: name }, () => this.validateName(name));
  }

  updateContent(content) {
    this.setState({ noteContent: content }, () =>
      this.validateContent(content)
    );
  }

  updateFolder(folderId) {
    this.setState({ noteFolder: folderId });
  }

  render() {
    return (
      <section className="AddNote">
        <h2>Create a note</h2>
        <ErrorBoundary>
          <NotefulForm
            onSubmit={(event, name, content, folderId) =>
              this.handleSubmit(
                event,
                this.state.noteName,
                this.state.noteContent,
                this.state.noteFolder
              )
            }
          >
            <div className="field">
              <label htmlFor="note-name-input">Name</label>
              <input
                type="text"
                id="note-name-input"
                onChange={e => this.updateName(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="note-content-input">Content</label>
              <textarea
                id="note-content-input"
                onChange={e => this.updateContent(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="note-folder-select">Folder</label>
              <select
                id="note-folder-select"
                onChange={e => this.updateFolder(e.target.value)}
              >
                {this.context.folders.map(folder => (
                  <option key={folder.id} value={folder.id}>
                    {folder.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="buttons">
              <button type="submit" disabled={!this.state.noteValid && !this.state.contentValid}>Add note</button>
            </div>
          </NotefulForm>
        </ErrorBoundary>
      </section>
    );
  }
}
