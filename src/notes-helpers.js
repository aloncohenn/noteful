export const findFolder = (folders = [], folderId) =>
  folders.find(folder => Number(folder.folder_id) === Number(folderId));

export const findNote = (notes = [], noteId) => {
  notes.find(note => note.note_id === Number(noteId));
};

export const getNotesForFolder = (notes = [], folderId) =>
  !folderId ? notes : notes.filter(note => note.folder_id === Number(folderId));

export const countNotesForFolder = (notes = [], folderId) =>
  notes.filter(note => note.folder_id === Number(folderId)).length;
  
  