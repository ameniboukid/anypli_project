import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NoteDetailPage.css';

const NoteDetailPage = () => {
  const { id } = useParams(); // Récupérer l'ID de la note depuis les paramètres de l'URL
  const navigate = useNavigate();
  const [noteText, setNoteText] = useState('');

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const note = notes[id]; // Récupérer la note par ID
    if (note) {
      setNoteText(note.text); // Remplir le champ de texte avec la note
    }
  }, [id]);

  const handleSaveNote = () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes[id].text = noteText; // Mettre à jour le texte de la note
    localStorage.setItem('notes', JSON.stringify(notes));
    navigate('/notes'); // Retourner à la page des notes après la sauvegarde
  };

  return (
    <div className="note-detail-container">
      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Enter your note here..."
      />
      <button onClick={handleSaveNote}>Save</button>
    </div>
  );
};

export default NoteDetailPage;
