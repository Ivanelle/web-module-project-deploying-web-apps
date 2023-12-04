import React, { useState } from 'react';
import Note from './components/Note';

import './App.css';


function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleNoteChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleNoteKeyDown = e => {
    if (e.key === 'Enter' && newNote.trim() !== '') {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  }
  return (
    <div className="scroll">
      <h1>Take your notes!</h1>
      <div className="input-container">
        <textarea 
          className="note-input"
          placeholder="Whats on your mind?"
          value={newNote}
          onChange={handleNoteChange}
          onKeyDown={handleNoteKeyDown}
        />
      </div>

      <div className="notes">
        {notes.map((note, index) => (
          <Note key={index} content={note} />
        ))}
      </div>
    </div>
  );
}

export default App;