import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSubmit, onCancel }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [level, setLevel] = useState(1);
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (user) {
      setEmail(user.email);
      setName(user.name);
      setLevel(user.level);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, name, level, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Level</label>
        <input
          type="number"
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
          min="1"
          max="5"
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};

export default UserForm;
