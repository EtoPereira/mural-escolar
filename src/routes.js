import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Inicio from './pages/inicio';
import Registro from './pages/registro';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Inicio}/>
                <Route path="/registro" component={Registro}/>
            </Switch>
        </BrowserRouter>
    );
}