import React from 'react';

import {Link} from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi'


import './styles.css';
import LoginImagem from '../../images/login.jpg'

export default function Login() {
    return (
        <div className="login-container">
            <section className="form">
                <form>
                    <h1>Faça login para acessar</h1>

                    <input placeholder="E-mail"/>
                    &nbsp;
                    <input placeholder="Senha"/>
                    <button className="button">Entrar</button>
                    <Link className="back-link" to="/registro"><FiLogIn size={16} color="#FF0000"/>Não tenho cadastro</Link>
                </form>
            </section>
                    <img className="img" src={LoginImagem}></img>

        </div>
    );



}

