import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import CadastroUser from './pages/CadastroUser'
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
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}