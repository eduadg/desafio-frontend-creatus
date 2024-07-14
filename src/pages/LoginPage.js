import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import '../styles/PaginaDeLogin.css';
import '../styles/CampoDeDigitacao.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
      navigate('/users');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className='container-login'>
      <img src={require('../img/imagem-login.png')} alt='Descrição da imagem' className='login-image' />
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
        <fieldset className='form__opcoes'>
          <div className='form__campo-checkbox'>
            <input type="checkbox" id='lembrar' />
            <label htmlFor="lembrar">Lembrar-me</label>
          </div>
          <p>
            <a href="/reset-password" aria-label='Recuperar senha esquecida'>Esqueci a senha</a>
          </p>
        </fieldset>
        <button type='submit' className='form__botao'>Login</button>
      </form>
      <div className='container-links'>
        <p className='container-links__titulo'>ou entre com outras contas</p>
        <ul>
          <li>
            <a href='https://www.github.com'>
              <img src={require('../img/Github.svg')} alt='Ícone do Github' />
              Github
            </a>
          </li>
          <li>
            <a href='https://www.google.com'>
              <img src={require('../img/Google.svg')} alt='Ícone do Google' />
              Google
            </a>
          </li>
        </ul>
        <p className='container-links__texto'>Ainda não tem conta?</p>
        <a href="/signup" className='container-links__link'>Crie seu cadastro!</a>
      </div>
    </div>
  );
};

export default LoginPage;
