import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi'


import './styles.css';
import LoginImagem from '../../images/login.jpg'

import api from '../../services/api';

export default function Login() {
    const [id, setId] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();
        try{
            const response = await api.post('sessions',{id, senha})
            console.log(response);
            console.log(response.data);
            
            localStorage.setItem('professorNome', response.data.nome);
            localStorage.setItem('professorId', id);

            history.push('perfil');
            
        }catch(error){
            alert('Falha no login, tente novamente.')
        }
    }
    return (
        <div className="login-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>Faça login para acessar</h1>

                    <input value={id} onChange={e=>setId(e.target.value)} placeholder="Id" />
                    &nbsp;
                    <input value={senha} onChange={e=>setSenha(e.target.value)} placeholder="Senha" />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/registro"><FiLogIn size={16} color="#FF0000" />Não tenho cadastro</Link>
                </form>
            </section>
            <img className="img" src={LoginImagem}></img>
        <form action=""></form>
        </div>
    );



}

