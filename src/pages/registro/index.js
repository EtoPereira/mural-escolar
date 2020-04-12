import React from 'react';

import './styles.css';


export default function Registro() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro professor, e comece a publicar informações sobre as aulas e datas de avaliações</p>
                </section>
                <form>
                    <input placeholder="Nome"></input>
                </form>
            </div>

        </div>
    );
}