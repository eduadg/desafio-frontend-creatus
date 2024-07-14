import React, { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '../services/api';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import '../styles/UserPage.css';

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const handleCreateOrUpdate = async (user) => {
    if (currentUser) {
      await updateUser(currentUser.id, user);
    } else {
      await createUser(user);
    }
    fetchUsers();
    setFormVisible(false);
    setCurrentUser(null);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setFormVisible(true);
  };

  return (
    <div>
      <h1>Usuários</h1>
      <button onClick={() => setFormVisible(true)}>Adicionar Usuário</button>
      {formVisible && (
        <UserForm
          user={currentUser}
          onSubmit={handleCreateOrUpdate}
          onCancel={() => {
            setFormVisible(false);
            setCurrentUser(null);
          }}
        />
      )}
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default UserPage;
