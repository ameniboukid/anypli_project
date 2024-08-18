import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import NotesPage from './components/NotesPage/NotesPage'; // Adjust the path if necessary

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

