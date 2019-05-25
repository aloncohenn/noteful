fetchFolders = () => {
  fetch('http://localhost:8000/api/folders')
    .then(res => res.json())
    .catch(error => console.log(error));
}

export default fetchNotes = () => {
  return fetch('http://localhost:8000/api/notes')
    .then(res => res.json())
    .catch(error => console.log(error));
}

