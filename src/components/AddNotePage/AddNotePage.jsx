import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddNotePage.css';

const AddNotePage = () => {
  const [noteText, setNoteText] = useState('');
  const [reminderDate, setReminderDate] = useState('');
  const [reminderTime, setReminderTime] = useState('');
  const navigate = useNavigate();

  const handleSaveNote = () => {
    if (noteText.trim()) {
      const notes = JSON.parse(localStorage.getItem('notes')) || [];
      const newNote = {
        text: noteText,
        date: new Date().toLocaleString(),
        reminder: reminderDate && reminderTime ? new Date(`${reminderDate}T${reminderTime}`).toISOString() : null
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
      <input
        type="date"
        value={reminderDate}
        onChange={(e) => setReminderDate(e.target.value)}
        placeholder="Reminder Date"
      />
      <input
        type="time"
        value={reminderTime}
        onChange={(e) => setReminderTime(e.target.value)}
        placeholder="Reminder Time"
      />
      <button onClick={handleSaveNote}>Save</button>
    </div>
  );
};

export default AddNotePage;



