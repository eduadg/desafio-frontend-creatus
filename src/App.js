import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/users/:userId" element={<UserDetails />} />
    </Routes>
  );
};

export default App;
