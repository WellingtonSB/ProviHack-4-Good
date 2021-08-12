import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import CadastroUser from './pages/CadastroUser'
import NotFound from './pages/NotFound';
import CadastroEmpresa from './pages/CadastroEmpresa'
import CadastroEmpresa2 from './pages/CadastroEmpresa2'
import CadastroEmpresa3 from './pages/CadastroEmpresa3'
import Feed from './pages/feed'
import Login from './pages/SingUp'
import Vaga from './pages/Vaga'
import Ajuda from './pages/ajuda'




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
            <Route exact path="/feed">
                <Feed />
            </Route>
            <Route exact path="/usercadastro/login">
                <Login />
            </Route>
            <Route exact path="/vaga">
                <Vaga />
            </Route>
            <Route exact path="/ajuda">
                <Ajuda />
            </Route>
            <Route>
                <NotFound />
            </Route>
            
        </Switch>
       
    )
}