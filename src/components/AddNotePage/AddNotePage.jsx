import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddNotePage.css';

const AddNotePage = () => {
  const [noteText, setNoteText] = useState('');
  const navigate = useNavigate();

  const handleSaveNote = () => {
    if (noteText.trim()) {
      const notes = JSON.parse(localStorage.getItem('notes')) || [];
      const newNote = {
        text: noteText,
        date: new Date().toLocaleString() // Automatically set the current date and time
      };
      localStorage.setItem('notes', JSON.stringify([...notes, newNote]));
      navigate('/notes');
    }
  };

  return (
    <div className="add-note-container">
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Enter your note here..."
      />
      <button onClick={handleSaveNote}>Save</button>
    </div>
  );
};

export default AddNotePage;


