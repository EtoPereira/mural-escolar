import React from 'react';
import { Link } from 'react-router-dom';

import { FiPower, FiCalendar } from 'react-icons/fi'

import './styles.css';
import logo from '../../images/logo.png';

export default function Inicio() {
    return (
        <div className="inicio-container">
            <header>
                <img src={logo} alt="Mural Escolar"></img>
                <span>Bem-vindo!</span>
                <Link className="button">Cadastrar Informações</Link>
                <button><FiPower size={18} color="#E02041" /></button>
            </header>
            <h1>Mural de Informações</h1>
            <ul>
                <li>
                    <strong>Titulo</strong>

                    <p>Mussum Ipsum, cacilds vidis litro abertis.
                        Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
                        Diuretics paradis num copo é motivis de denguis.
                        Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
                        Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!</p>
                    <strong className="date-align">Data: 07/04/2020</strong>
                </li>
                <li>
                    <strong>Titulo</strong>

                    <p>Mussum Ipsum, cacilds vidis litro abertis.
                        Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
                        Diuretics paradis num copo é motivis de denguis.
                        Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
                        Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!</p>
                    <strong className="date-align">Data: 07/04/2020</strong>
                </li>
                <li>
                    <strong>Titulo</strong>

                    <p>Mussum Ipsum, cacilds vidis litro abertis.
                        Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
                        Diuretics paradis num copo é motivis de denguis.
                        Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
                        Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!</p>
                    <strong className="date-align">Data: 07/04/2020</strong>
                </li>
                <li>
                    <strong>Titulo</strong>

                    <p>Mussum Ipsum, cacilds vidis litro abertis.
                        Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
                        Diuretics paradis num copo é motivis de denguis.
                        Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
                        Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!</p>
                </li>

                <li>
                    <strong>Titulo</strong>

                    <p>Mussum Ipsum, cacilds vidis litro abertis.
                        Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
                        Diuretics paradis num copo é motivis de denguis.
                        Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
                        Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!</p>
                </li>
            </ul>
            <br />
            <footer>
                <ul>
                    <li>
                        <strong className="calendar-title">Calendário</strong><button className="button-calendar">Adicionar data</button>
                        <strong>08/04/2020 - Prova 1º Trimestre</strong>
                        <hr></hr>
                        <strong>08/04/2020 - Prova 1º Trimestre</strong>
                    </li>
                    <li>
                        <Link className="button">Adicionar horário das aulas</Link>
                        <Link className="button"><FiCalendar></FiCalendar>&#32;Horário das aulas</Link>
                    </li>
                </ul>
            </footer>
        </div>
    )
}