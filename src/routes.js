import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inicio from './pages/inicio';
import Registro from './pages/registro';
import Login from './pages/login';
import novoAviso from './pages/novoAviso';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/avisos/novo" exact component={novoAviso} />
                <Route path="/perfil" exact component={Inicio} />
                <Route path="/registro" component={Registro} />
                <Route path="/" component={Login} />
            </Switch>
        </BrowserRouter>
    );
}