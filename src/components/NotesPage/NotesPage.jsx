import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotesPage.css';

const NotesPage = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const navigate = useNavigate();

  const handleDeleteNote = (index) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
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
        <button onClick={() => navigate('/add-note')}>Add Note</button>
      </div>
    </div>
  );
};

export default NotesPage;




