import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'

import {FiLogIn} from 'react-icons/fi'
import './styles.css';

import api from '../../services/api';


import professor from '../../images/professor.png'

export default function Registro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();

    async function handleRegistro(e){
        e.preventDefault();
        
        const data = {
            nome,
            email,
            senha
        };

        try{
            const response = await api.post('professores', data);

            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/');
        }catch(error){
            alert("Erro no cadastro. Tente novamente", error);
        }
    }


    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <img className="img-cadastro" src={professor}></img>
                    <p>Faça seu cadastro professor, e comece a publicar informações sobre as aulas e datas de avaliações</p>
                </section>
                <form onSubmit={handleRegistro}>
                    <select>
                        <option>Professor</option>
                        <option>Pai/Mãe</option>
                    </select>
                    <input value={nome} onChange={e=> setNome(e.target.value)} placeholder="Nome"></input>
                    <input value={email} onChange={e=> setEmail(e.target.value)} placeholder="E-mail"></input>
                    <input value={senha} onChange={e=> setSenha(e.target.value)} placeholder="Senha"></input>

                    <button className="button-add" type="submit">Realizar Cadastro</button>
                    <Link className="back-link" to="/"><FiLogIn size={16} color="#ff0000"/>Já tenho cadastro</Link>
                </form>
            </div>

        </div>
    );
}