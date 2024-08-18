import React, { useState } from 'react';
import './NotesPage.css';

const NotesPage = () => {
  const [notes, setNotes] = useState([
    { text: 'Go to the gym', date: '2024-08-18 09:00' },
    { text: 'Do my homework', date: '2024-08-18 14:00' },
    { text: 'Complete my React project', date: '2024-08-18 18:00' }
  ]);
  const [newNote, setNewNote] = useState('');
  const [newNoteDate, setNewNoteDate] = useState('');

  const handleAddNote = () => {
    if (newNote.trim() && newNoteDate.trim()) {
      setNotes([...notes, { text: newNote, date: newNoteDate }]);
      setNewNote('');
      setNewNoteDate('');
    }
  };

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  return (
    <div className="notes-container">
      {notes.map((note, index) => (
        <div key={index} className="note-card">
          <p>{note.text}</p>
          <span>{note.date}</span>
          <button onClick={() => handleDeleteNote(index)}>Delete</button>
        </div>
      ))}
      <div className="add-note-card">
        <textarea 
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Add a new note..."
        />
        <input 
          type="datetime-local"
          value={newNoteDate}
          onChange={(e) => setNewNoteDate(e.target.value)}
        />
        <button onClick={handleAddNote}>Add Note</button>
      </div>
    </div>
  );
}

export default NotesPage;


