import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import CadastroUser from './pages/CadastroUser';
import CadastroUser2 from './pages/CadastroUser2';
import CadastroUser3 from './pages/CadastroUser3';
import CadastroUser4 from './pages/CadastroUser4';

import NotFound from './pages/NotFound';


export default () => {
    return (
        
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/usercadastro">
                <CadastroUser />
            </Route>
            <Route exact patch="/usercadastro1">
                <CadastroUser3 />
            </Route>
            <Route exact patch="/usercadastro2">
                <CadastroUser2 />
            </Route>
            <Route exact patch="/usercadastro3">
                <CadastroUser4 />
            </Route>

            <Route>
                <NotFound />
            </Route>
        </Switch>
        
    )
}