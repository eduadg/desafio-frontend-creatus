import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSubmit, onCancel }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [accessLevel, setAccessLevel] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setName(user.name);
      setAccessLevel(user.accessLevel.toString()); // Convertendo para string
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(accessLevel) < 1 || parseInt(accessLevel) > 5) {
      setError('Access level must be between 1 and 5');
      return;
    }
    setError('');
    onSubmit({ email, name, accessLevel: accessLevel.toString(), password }); // Convertendo para string
  };

  return (
    <form onSubmit={handleSubmit} className="user-form">
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="form-group">
        <label className="user-form-label">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="user-form-label">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label className="user-form-label">Access Level</label>
        <input
          type="number"
          value={accessLevel}
          onChange={(e) => setAccessLevel(e.target.value)}
          required
          min="1"
          max="5"
        />
      </div>
      <div className="form-group">
        <label className="user-form-label">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-save">Save</button>
        <button type="button" className="btn btn-cancel" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default UserForm;