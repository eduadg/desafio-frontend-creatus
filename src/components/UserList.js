import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Access Level</th>
          <th>Editar/Deletar</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.accessLevel}</td>
            <td>
              <button className="btn btn-edit" onClick={() => onEdit(user)}>Edit</button>
              <button className="btn btn-delete" onClick={() => onDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
