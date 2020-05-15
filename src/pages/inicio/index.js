import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { FiPower, FiCalendar, FiXCircle } from 'react-icons/fi'

import './styles.css';
import logo from '../../images/logo.png';

import api from '../../services/api'

export default function Inicio() {
    const [avisos, setAvisos] = useState([]);
    const nome = localStorage.getItem('professorNome')
    const professorId = localStorage.getItem('professorId')
    const history = useHistory();
    
    useEffect(()=>{
        api.get('perfil', {
            headers: {
                Authorization:  professorId,
            }
        }).then(response=>{
            setAvisos(response.data)
        })
    }, [professorId])

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    async function handleDeleteAviso(id){
        try{
            await api.delete(`publicacoes/${id}`, {
                headers: {
                    Authorization: professorId,
                }
            });
            setAvisos(avisos.filter(aviso=>aviso.id !== id))
        }catch(error){
            alert('Erro ao deletar o aviso, tente novamente.')
        }
    }
    return (
        <div className="inicio-container">
            <header>
                <img src={logo} alt="Mural Escolar"></img>
                <span>Bem-vindo, Professor(a) {nome}!</span>
                <Link to="/avisos/novo" className="button-add">Cadastrar Informações</Link>
                <button onClick={handleLogout} ><FiPower size={18} color="#E02041" /></button>
            </header>
            <h1>Mural de Informações</h1>
            <ul>
                {avisos.map(aviso => (
                    <li key={aviso.professorId}>
                        <strong>{aviso.titulo}</strong>

                        <p>{aviso.descricao}</p>
                        <strong className="date-align">Data: {aviso.data}</strong>
                        <button onClick={()=>handleDeleteAviso(aviso.id)} type="submit"><FiXCircle size={20} color="#FF0000"></FiXCircle></button>
                    </li>
                ))}
            </ul>
            <br />
            <footer>
                <ul>
                    <li>
                        <strong className="calendar-title">Calendário</strong><button className="button-calendar">Adicionar data</button>
                        <select className="select">
                            <option value="*">Selecionar o ano</option>
                            <option value="1">1º ano</option>
                            <option value="2">2º ano</option>
                            <option value="3">3º ano</option>
                        </select>
                        &nbsp;
                        <strong>08/04/2020 - Prova 1º Trimestre</strong>
                        <hr></hr>
                        <strong>08/04/2020 - Prova 1º Trimestre</strong>
                    </li>
                    <li>
                        <Link className="button-add">Adicionar horário das aulas</Link>
                        <Link className="button"><FiCalendar></FiCalendar>&#32;Horário das aulas</Link>
                    </li>
                </ul>
            </footer>
        </div>
    )
}