import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents';
import { PageArea } from './styled';

const Page = () => {
    return (
        <PageContainer>
            <PageArea > 
                
            <div className="container">

            

            <form> 
                <div> 
                    <label className="">
                    <p className="passos">Passo 2 de 4</p>
    
                    <h2 className="SubtTitle">Identificação</h2>
                        <p>Identidade de gênero</p>
                    <select class="Rectangle-19 Escolher">
                    <option value="1">One</option>
                     <option value="2">Two</option>
                    <option value="3">Three</option>
                     <option value="4">Four</option>
                     <option value="5">Five</option>
                    <option value="6">Six</option>
                     <option value="7">Seven</option>
                      <option value="8">Eight</option>
                      </select>
                      </label>
                        </div>

                        <div> 
                    <label className="">
                    
                        <p>Sexualidade</p>
                         <select class="Rectangle-19 Escolher">
                        <option value="1">One</option>
                         <option value="2">Two</option>
                         <option value="3">Three</option>
                        <option value="4">Four</option>
                          <option value="5">Five</option>
                          <option value="6">Six</option>
                        <option value="7">Seven</option>
                      <option value="8">Eight</option>
                      </select>
                      </label>
                        </div>

                        <div> 
                    <label className="">
                    
                        <p>Etnia</p>
                    <select class="Rectangle-19 Escolher">
                    <option value="1">One</option>
                     <option value="2">Two</option>
                    <option value="3">Three</option>
                     <option value="4">Four</option>
                     <option value="5">Five</option>
                    <option value="6">Six</option>
                     <option value="7">Seven</option>
                      <option value="8">Eight</option>
                      </select>
                      </label>
                        </div>

                        <div> 
                    <label className="">
                
                        <p>Escolaridade</p>
                    <select class="Rectangle-19 Escolher">
                    <option value="1">One</option>
                     <option value="2">Two</option>
                    <option value="3">Three</option>
                     <option value="4">Four</option>
                     <option value="5">Five</option>
                    <option value="6">Six</option>
                     <option value="7">Seven</option>
                      <option value="8">Eight</option>
                      </select>
                      </label>
                        </div>

                        <label className="area">
                        <div className="area--title"></div>
                        <div className="Cadastrar">
                            <Link to="/usercadastro2"><button onClick="" className="Frame-2 Cadastrar"  >Próximo</button> </Link>
                        </div>
                        <p className="politica">Pular Cadstro</p>
                    </label>

                </form>
                <div className="">
                    <h2 className="pg" >Saber mais sobre você nos ajuda a construir um serviço na medida das suas necessidades.</h2>
                    </div> 
                    </div>

                
            
            

          </PageArea>

        </PageContainer>
        

    )
}

export default Page;