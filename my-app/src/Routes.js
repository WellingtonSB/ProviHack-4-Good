import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'; 
import Home from './pages/Home';
<<<<<<< HEAD
import CadastroUser from './pages/CadastroUser';
import CadastroUser2 from './pages/CadastroUser2';
import CadastroUser3 from './pages/CadastroUser3';
import CadastroUser4 from './pages/CadastroUser4';
=======
import CadastroUser from './pages/CadastroUser'
import NotFound from './pages/NotFound';
import CadastroEmpresa from './pages/CadastroEmpresa'
import CadastroEmpresa2 from './pages/CadastroEmpresa2'
import CadastroEmpresa3 from './pages/CadastroEmpresa3'
>>>>>>> 63b892d33d1794445997efd7d7b5226259ae0a90

import NotFound from './pages/NotFound';


export default () => {
    return (
<<<<<<< HEAD
        
=======
     
>>>>>>> 63b892d33d1794445997efd7d7b5226259ae0a90
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/usercadastro">
                <CadastroUser />
            </Route>
<<<<<<< HEAD
            <Route exact patch="/usercadastro1">
                <CadastroUser3 />
            </Route>
            <Route exact patch="/usercadastro2">
                <CadastroUser2 />
            </Route>
            <Route exact patch="/usercadastro3">
                <CadastroUser4 />
            </Route>

=======
            <Route exact path="/empresacadastro">
                <CadastroEmpresa />
            </Route>
            <Route exact path="/empresacadastro2">
                <CadastroEmpresa2 />
            </Route>
            <Route exact path="/empresacadastro3">
                <CadastroEmpresa3 />
            </Route>
>>>>>>> 63b892d33d1794445997efd7d7b5226259ae0a90
            <Route>
                <NotFound />
            </Route>
            
        </Switch>
<<<<<<< HEAD
        
=======
       
>>>>>>> 63b892d33d1794445997efd7d7b5226259ae0a90
    )
}