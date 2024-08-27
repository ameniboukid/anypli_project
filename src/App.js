import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import NotesPage from './components/NotesPage/NotesPage';
import AddNotePage from './components/AddNotePage/AddNotePage';
import NoteDetailPage from './components/NoteDetailPage/NoteDetailPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/add-note" element={<AddNotePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} /> {/* Nouvelle route pour la page de détail */}
      </Routes>
    </Router>
  );
}

export default App;



