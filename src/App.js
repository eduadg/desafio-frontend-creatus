import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import UserDetails from './components/UserDetails';  // Importação corrigida

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/users" element={<UserPage />} />
      <Route path="/users/:userId" element={<UserDetails />} />
    </Routes>
  );
};

export default App;
