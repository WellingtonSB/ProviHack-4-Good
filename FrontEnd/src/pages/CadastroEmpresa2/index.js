import React from "react";
import { PageContainer } from "../../components/MainComponents";
import { PageArea } from "../CadastroEmpresa2/styled";
import { Link } from "react-router-dom"

const Page = () => {
  return (
    <PageContainer>
      <PageArea>
      

        <form>
          <div class="mb-3">
            <label for="descricao" class="form-label descricao">
              Breve Descrição da Empresa
            </label>
            <textarea
              type="text"
              class="form-control AreainputPass"
              id="descricao"
              placeholder="Descrição"

            />
          </div>
        </form>
        <Link to='/empresacadastro3'>
          <div className="d-flex justify-content-end mb-5">
            <button type="submit" class="btn Frame-2 Cadastrar">
              Continuar
            </button>
          </div>
        </Link>

        <p className="passo"> Passo 2 de 3 </p>
      </PageArea>
    </PageContainer>
  );
};
export default Page;
