import React from 'react';
import { HeaderArea } from './styled';

const Header = () => {
    return(
        <HeaderArea>

<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="https://imgur.com/zbhjKRy" alt="" width="30" height="24" />
    </a>
    <a class="navbar-brand" href="#">Lacrei</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Saúde</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Direitos</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Oportunidades</a>
        </li>
      </ul>
      <button src="" className="BTN-Entrar">Entrar</button>
    
    </div>
  </div>
</nav>

            
        </HeaderArea>
    );
}
export default Header;