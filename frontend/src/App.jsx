// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Adminhome from './components/pages/admin/Adminhome';
import UserHome from './components/pages/user/UserHome';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Adminhome />} />
        <Route path="/user" element={<UserHome />} />
      </Routes>
    </Router>
  );
};

export default App;
