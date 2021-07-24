import React from 'react';
import { HeaderArea } from './styled';

const Header = () => {
    return(
        <HeaderArea>
            <div className="container">
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
            <button src="" className="BTN-Entrar">Entrar</button>
            </div>

            
        </HeaderArea>
    );
}
export default Header;