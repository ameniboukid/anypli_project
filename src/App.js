import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import NotesPage from './components/NotesPage/NotesPage';
import AddNotePage from './components/AddNotePage/AddNotePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/add-note" element={<AddNotePage />} />
      </Routes>
    </Router>
  );
}

export default App;


