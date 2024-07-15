import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSubmit, onCancel }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [accessLevel, setAccessLevel] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setName(user.name);
      setAccessLevel(user.accessLevel);
      setPassword(user.password); // Inclua a senha atual se necessário
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, name, accessLevel, password });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Access Level</label>
        <input
          type="text"
          value={accessLevel}
          onChange={(e) => setAccessLevel(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
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
