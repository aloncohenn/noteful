import React, { Component } from 'react';
import NotefulForm from '../NotefulForm/NotefulForm';
import AppContext from '../AppContext';
import ValidationError from '../ValidationError';
import './AddFolder.css';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

export default class AddFolder extends Component {
  static contextType = AppContext;

  state = {
    folderName: '',
    folderNameValid: false,
    validationMessages: null
  };

  handleSubmit(event, folderName) {
    event.preventDefault();
    console.log('handle submit ran');
    this.context.addFolder(folderName);
  }

  validateFolderName(name) {
    let fieldErrors = this.state.validationMessages;
    let hasError = false;
    const checkFolderNames = this.context.folders.filter(
      folderName => name === folderName.name
    );

    if (checkFolderNames.length !== 0) {
      fieldErrors = 'Folder name already exists';
      hasError = true;
    }

    if (name.length === 0) {
      fieldErrors = 'Folder must have a name';
      hasError = true;
    }

    this.setState(
      {
        validationMessages: fieldErrors,
        folderNameValid: !hasError
      },
      this.formValid(name)
    );
  }

  formValid(name) {
    if (this.state.folderNameValid) {
      this.setState({ folderName: name });
    }
  }

  updateFolderName(name) {
    this.setState({ name }, () => this.validateFolderName(name));
  }

  render() {
    return (
      <section className="AddFolder">
        <h2>Create a folder</h2>
        <ErrorBoundary>
          <NotefulForm
            onSubmit={(event, name) =>
              this.handleSubmit(event, this.state.folderName)
            }
          >
            <div className="field">
              <label htmlFor="folder-name-input">Name</label>
              <input
                type="text"
                id="folder-name-input"
                onChange={e => this.updateFolderName(e.target.value)}
              />
              <ValidationError
                hasError={!this.state.folderNameValid}
                message={this.state.validationMessages}
              />
            </div>
            <div className="buttons">
              <button type="submit" disabled={!this.stat.folderNameValid}>
                Add folder
              </button>
            </div>
          </NotefulForm>
        </ErrorBoundary>
      </section>
    );
  }
}
