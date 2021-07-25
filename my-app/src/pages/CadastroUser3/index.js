import React from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents';
import { PageArea } from './styled';

const Page = () => {
    return (
        <PageContainer>
            <PageArea > 
            <form> 
                <div> 
                    <label className="">
                    <p className="passos">Passo 3 de 4</p>
    
                    <h2 className="SubtTitle">Informações profissionais</h2>
                    <p>Qual a sua profissão?</p>
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
                        <div className="J-fez-algum-curso-profissionalizante">Já fez algum curso profissionalizante?</div>
                        <div class="form-check d-flex justify-content-center mb-4">
                          <input
                         class="form-check-input me-2"
                         type="checkbox"
                         value=""
                         id="form2Example3"
                         checked
                             />
                         <label class="form-check-label" for="form2Example3">
                                Não
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
            

          </PageArea>

        </PageContainer>
        

    )
}

export default Page;