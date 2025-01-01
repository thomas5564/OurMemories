import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './register'; // Your registration component
import Login from './Login'; // Your login component
import Dashboard from './dashboard';

function App() {
  return (
    <Router> {/* Ensures all child components are wrapped in Router context */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
