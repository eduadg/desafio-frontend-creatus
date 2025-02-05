import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import '../styles/PaginaDeLogin.css';
import '../styles/CampoDeDigitacao.css';
import Titulo from '../components/Titulo';
import Subtitulo from '../components/SubTitulo';
import CampoDeDigitacao from '../components/CampoDeDigitacao';
import Botao from '../components/BotaoLogin';
import Checkbox from '../components/CheckBox';
import LinkSocialmidia from '../components/LinkSocialmidia';
import LinkGenerico from '../components/LinkGenerico';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // eslint-disable-next-line no-unused-vars
            const user = await login(email, password);
            navigate('/users'); 
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const recuperarSenha = () => {
        console.log('Recuperar senha');
    };

    return (
      <div className='container-login'>
          <img src={require('../img/novaimgcreatus.webp')} alt='Descrição da imagem' className='img-creatus' />
          <section>
              <form onSubmit={handleSubmit}>
                  <Titulo>Login</Titulo>
                  <Subtitulo>Boas vindas! Faça o seu login</Subtitulo>
                  <CampoDeDigitacao
                      label='E-mail ou usuário'
                      tipo='email'
                      placeholder='Digite o seu e-mail ou usuário'
                      value={email}
                      setValor={setEmail}
                  />
                  <CampoDeDigitacao
                      label='Senha'
                      tipo='password'
                      placeholder='Digite a sua senha'
                      value={password}
                      setValor={setPassword}
                  />
                  <fieldset className='form__opcoes'>
                      <Checkbox />
                      <p>
                          <button onClick={recuperarSenha} aria-label='Recuperar senha esquecida' style={{ background: 'none', border: 'none', color: 'var(--offwhite)', cursor: 'pointer', textDecoration: 'underline' }}>Esqueci a senha</button>
                      </p>
                  </fieldset>
                  <Botao>Login</Botao>
              </form>
              <div className='container-links'>
                  <p className='container-links__titulo'>ou entre com outras contas</p>
                  <ul>
                      <LinkSocialmidia link='https://www.github.com' nome='Github' />
                      <LinkSocialmidia link='https://www.google.com' nome='Google' />
                  </ul>
                  <p className='container-links__texto'>Ainda não tem conta?</p>
                  <LinkGenerico href="/signup">Crie seu cadastro!</LinkGenerico>
              </div>
          </section>
      </div>
    );
};

export default LoginPage;
