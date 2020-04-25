import React from 'react';
import {Link} from 'react-router-dom'

import {FiLogIn, FiArrowLeft} from 'react-icons/fi'
import './styles.css';


import professor from '../../images/professor.png'

export default function Registro() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <img className="img-cadastro" src={professor}></img>
                    <p>Faça seu cadastro professor, e comece a publicar informações sobre as aulas e datas de avaliações</p>
                </section>
                <form>
                    <select>
                        <option>Professor</option>
                        <option>Pai/Mãe</option>
                    </select>
                    <input placeholder="Nome"></input>
                    <input placeholder="E-mail"></input>
                    <input placeholder="Senha"></input>

                    <button className="button-add">Realizar Cadastro</button>
                    <Link className="back-link" to="/"><FiLogIn size={16} color="#ff0000"/>Já tenho cadastro</Link>
                </form>
            </div>

        </div>
    );
}