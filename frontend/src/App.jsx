// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UniversityPage from './pages/UniversityPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/university" element={<UniversityPage />} />
      </Routes>
    </Router>
  );
};

export default App;
