import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents';
import { PageArea } from './styled';

const Page = () => {
    return (
        <PageContainer>
            <PageArea >
            <h1 className="Title">Cadastro</h1>

            <div className="container">
            <form>
                    <label className="area">
                        <div className="area--title">Nome*</div>
                        <div className="area--input">
                            <input 
                            type="text"
                            class="Rectangle-19"
                         //   id="setmail"
                            aria-describedby="emailHelp"
                            placeholder="Como você se chama?"/>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Email*</div>
                        <div className="area--input">
                            <input 
                            type="email"
                            class="Rectangle-19"
                           // id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="meu@email.com"
                    
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha*</div>
                        <div className="area--input">
                            <input 
                            type="password"
                            class="Rectangle-19"
                            //id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="4897845jkfsdf"
                            />
                        </div>
                    </label>
                    
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="Cadastrar">
                            <Link to="/usercadastro1"><button onClick="" className="Frame-2 Cadastrar"  >Cadastrar</button> </Link>
                        </div>
                        <p className="politica">Ao clicar no botão "Cadastrar", você está criando uma conta na Lacrei Oportunidades e concorda com os nossos Termos de Uso e Privacidade.</p>
                    </label>
                </form>
                <div >
                    <h2 className="SubTitle" >Precisamos de alguns dados seus para realizar o cadastro. Não se preocupa, eles estarão seguros com a gente Vamos juntes?</h2>
                    </div> 

                    </div>
            

          </PageArea>

        </PageContainer>
        

    )
}

export default Page;