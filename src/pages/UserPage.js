import React, { useState, useEffect } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '../services/api';
import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable';
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
    try {
      console.log('Creating/updating user:', user);
      if (currentUser) {
        await updateUser(currentUser.id, user);
      } else {
        await createUser(user);
      }
      fetchUsers();
      setFormVisible(false);
      setCurrentUser(null);
    } catch (error) {
      console.error('Error creating/updating user:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setFormVisible(true);
  };

  return (
    <div className="user-page">
      <div className="usuarios-header">
        <h1 className="usuarios-titulo">Usuários</h1>
        <button className="adicionar-usuario-btn" onClick={() => setFormVisible(true)}>Adicionar Usuário</button>
      </div>
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
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default UserPage;
