import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../services/api';
import '../styles/PaginaDeLogin.css';
import '../styles/CampoDeDigitacao.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
      history.push('/users');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className='container-login'>
      <form onSubmit={handleSubmit}>
        <h1 className='form__titulo'>Login</h1>
        <h2 className='form__texto'>Boas vindas! Faça o seu login</h2>
        <div className='form__campo-digitacao'>
          <label htmlFor='email'>E-mail ou usuário</label>
          <input
            type='email'
            placeholder='Digite o seu e-mail ou usuário'
            required
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='form__campo-digitacao'>
          <label htmlFor='password'>Senha</label>
          <input
            type='password'
            placeholder='Digite a sua senha'
            required
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='form__botao'>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
