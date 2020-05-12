import React from 'react';
import './styles.css';

import {Link} from 'react-router-dom';

import {FiArrowLeft} from 'react-icons/fi'

import imagemNovo from '../../images/login.jpg'


export default function novoAviso() {
    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img className="img-novo" src={imagemNovo} alt="Be The Hero" />
                <h1>Cadastrar novo aviso</h1>
                <p>Descreva o aviso detalhadamente para informar os pais dos alunos.</p>
                 <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" /> 
                    Voltar ao início
                </Link> 
            </section>
            <form>
                <input  value={''} onChange={''} placeholder="Titulo" />
                <textarea  value={''} onChange={''} placeholder="Descrição" />
                {/* <input  value={''} onChange={''} placeholder="Valor em reais" /> */}
                <button className="button-add" onClick={''} type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}