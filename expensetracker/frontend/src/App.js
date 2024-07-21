
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './component/Navbar';
import Login from './component/Login';
import Register from './component/Regsister';
import Expensetable from './component/Expensetable';
import SummaryInsights from './component/SummaryInsights';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Expensetable /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/summary" element={<SummaryInsights/>} />
      </Routes>
    </Router>
  );
};

export default App;
