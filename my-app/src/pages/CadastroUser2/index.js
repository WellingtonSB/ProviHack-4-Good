import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents';
import { PageArea } from './styled';

const Page = () => {
    return (
        <PageContainer>
            <PageArea > 
            <p> Passo 1 de 4 </p>

            <h2 className="Subtitle">Informações pessoais</h2>

<div className="container">
<form>
        <label className="area">
            <div className="area--title">Data de Nascimento</div>
            <div className="area--input">
                <input 
                type="text"
                class="Rectangle-19"
             //   id="setmail"
                aria-describedby="emailHelp"
                placeholder="____/____/______"/>
            </div>
        </label>
        <label className="area">
            <div className="area--title">Telefone</div>
            <div className="area--input">
                <input 
                type="text"
                class="Rectangle-19"
               // id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="(00) 9000-000"
        
                />
            </div>
        </label>
        <label className="area">
            <div className="area--title">Perfil no linkedin</div>
            <div className="area--input">
                <input 
                type="tex"
                class="Rectangle-19"
                //id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="https://linkedin.com/perfil"
                />
            </div>
        </label>
        
        <label className="area">
            <div className="area--title"></div>
            <div className="Cadastrar">
                <Link to="/usercadastro3"><button onClick="" className="Frame-2 Cadastrar"  >Cadastrar</button> </Link>
            </div>
            <a>pular</a>
        </label>
    </form>
    <div >
        <h2 className="SubTitle" >Precisamos de alguns dados seus para realizar o cadastro. Não se preocupa, eles estarão seguros com a gente Vamos juntes?</h2>
        </div> 
        <div>            
            <button className="Ajuda" >Ajuda</button>
</div>

        </div>



          </PageArea>

        </PageContainer>
        

    )
}

export default Page;