import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NotesPage.css';

const NotesPage = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || []);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const checkReminders = () => {
            const now = new Date().toISOString();
            console.log("Checking reminders at:", now);

            notes.forEach(note => {
                console.log("Reminder:", note.reminder);
                if (note.reminder && note.reminder <= now) {
                    alert(`Reminder: ${note.text}`);
                }
            });
        };

        checkReminders(); // Appel immédiat pour vérifier
        const interval = setInterval(checkReminders, 60000); // Vérifie toutes les minutes
        return () => clearInterval(interval);
    }, [notes]);

    const handleAddNote = () => {
        navigate('/add-note');
    };

    const handleDeleteNote = (index) => {
        const newNotes = [...notes];
        newNotes.splice(index, 1);
        setNotes(newNotes);
        localStorage.setItem('notes', JSON.stringify(newNotes));
    };

    const handleNoteClick = (index) => {
        navigate(`/note/${index}`);
    };

    const filteredNotes = notes.filter(note =>
        note.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="notes-page">
            {notes.length === 0 ? (
                <div className="no-notes">
                    <p>No notes available. Please add your first note.</p>
                    <button onClick={handleAddNote}>Add Note</button>
                </div>
            ) : (
                <>
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Type to search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="notes-list">
                        {filteredNotes.length > 0 ? (
                            filteredNotes.map((note, index) => (
                                <div
                                    key={index}
                                    className={`note ${note.text.toLowerCase().includes(searchTerm.toLowerCase()) ? 'highlight' : ''}`}
                                    onClick={() => handleNoteClick(notes.indexOf(note))}
                                >
                                    <p>{note.text}</p>
                                    <span>{note.date}</span>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); // Empêcher la navigation lors de la suppression
                                            handleDeleteNote(notes.indexOf(note));
                                        }}
                                    >
                                        🗑️
                                    </button>
                                </div>
                            ))
                        ) : (
                            <p>No matching notes found.</p>
                        )}
                    </div>
                    <button className="add-note-btn" onClick={handleAddNote}>
                        Add Note
                    </button>
                </>
            )}
        </div>
    );
};

export default NotesPage;











