import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/UserDetails.css'

const UserDetails = () => {
    const location = useLocation();
    const user = location.state.user;

    return (
        <div className="user-details">
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Nível de Acesso:</strong> {user.accessLevel}</p>
            <p><strong></strong>Senha:{user.password}</p> 
            <button onClick={() => window.history.back()}>Voltar para tabela</button>
        </div>
    );
};

export default UserDetails;
