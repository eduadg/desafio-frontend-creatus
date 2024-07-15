import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserTable = ({ users, onEdit, onDelete }) => {
  const navigate = useNavigate();

  const handleDetailClick = (userId, user) => {
    navigate(`/users/${userId}`, { state: { user } });
  };

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Email</th>
          <th>Nome</th>
          <th>Nível de Acesso</th>
          <th>Editar/Deletar</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td onClick={() => handleDetailClick(user.id, user)} style={{ cursor: 'pointer' }}>{user.email}</td>
            <td onClick={() => handleDetailClick(user.id, user)} style={{ cursor: 'pointer' }}>{user.name}</td>
            <td onClick={() => handleDetailClick(user.id, user)} style={{ cursor: 'pointer' }}>{user.accessLevel}</td>
            <td>
              <button className="btn btn-edit" onClick={(e) => { e.stopPropagation(); onEdit(user); }}>Editar</button>
              <button className="btn btn-delete" onClick={(e) => { e.stopPropagation(); onDelete(user.id); }}>Deletar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
