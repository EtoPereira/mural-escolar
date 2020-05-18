import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';


import {FiArrowLeft} from 'react-icons/fi'

import imagemNovo from '../../images/login.jpg'

import api from '../../services/api'

export default function NovoAviso() {
    var date = new Date();

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    var data_atual = date.getDate() + '/' + '0' + date.getMonth() + '/' + date.getFullYear() 
    const [data, setData] = useState(data_atual);
    const history = useHistory();

    const professorId = localStorage.getItem('professorId');

    async function handleNovoAviso(e){
        e.preventDefault();
        const dados = {
            titulo,
            descricao,
            data,
        }
        try{
            await api.post('publicacoes', dados, {
                headers: {
                    Authorization: professorId,
                }
            });
            history.push('/perfil');
        }catch(error){
            alert('Erro ao cadastrar aviso.')
        }

    }
    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img className="img-novo" src={imagemNovo} alt="Be The Hero" />
                <h1>Cadastrar novo aviso</h1>
                <p>Descreva o aviso detalhadamente para informar os pais dos alunos.</p>
                 <Link className="back-link" to="/perfil">
                    <FiArrowLeft size={16} color="#E02041" /> 
                    Voltar ao início
                </Link> 
            </section>
            <form>
                <input  value={titulo} onChange={e=>setTitulo(e.target.value)} placeholder="Titulo" />
                <textarea  value={descricao} onChange={e=>setDescricao(e.target.value)} placeholder="Descrição" />
                <input disab value={data} onChange={e=>setData(e.target.value)} placeholder="Data da publicação" />
                <button className="button-add" onClick={handleNovoAviso} type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}