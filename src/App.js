import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';



const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
