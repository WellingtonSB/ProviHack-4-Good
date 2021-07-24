import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import CadastroUser from './pages/CadastroUser'
import NotFound from './pages/NotFound';
import CadastroEmpresa from './pages/CadastroEmpresa'
import CadastroEmpresa2 from './pages/CadastroEmpresa2'
import CadastroEmpresa3 from './pages/CadastroEmpresa3'



export default () => {
    return (
     
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/usercadastro">
                <CadastroUser />
            </Route>
            <Route exact path="/empresacadastro">
                <CadastroEmpresa />
            </Route>
            <Route exact path="/empresacadastro2">
                <CadastroEmpresa2 />
            </Route>
            <Route exact path="/empresacadastro3">
                <CadastroEmpresa3 />
            </Route>
            <Route>
                <NotFound />
            </Route>
            
        </Switch>
       
    )
}