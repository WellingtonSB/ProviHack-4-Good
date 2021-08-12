import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

const Header = () => {
    return(
        <HeaderArea>
            <div className="container mb-3">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-2">
                <div className="logo">
                    <img src="/imags/LacreiRedondo.png"/>
                </div>
                </div>
                <div className="col-md-6"> 
                <nav>
            <ul>
                <li>
                    <a className="a">Lacrei</a>
                </li>
                <li>
                <a className="a">Saúde</a>
                </li>
                <li>
                <a className="a">Direito</a>
                </li>
                <li>
                <a className="a">Oportunidades</a>
                    
                </li>
            </ul>
            </nav>
            </div>
            <div className="col-md-2">
            <button src="" className="BTN-Entrar mb-3">Entrar</button>
            </div>
            </div>
            </div> 

            
        </HeaderArea>
    );
}
export default Header;