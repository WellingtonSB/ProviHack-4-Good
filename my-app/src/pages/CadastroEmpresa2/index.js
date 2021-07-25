import React from "react";
import { PageContainer } from "../../components/MainComponents";
import { PageArea } from "../Home/styled";
import { Link } from "react-router-dom"

const Page = () => {
  return (
    <PageContainer>
      <PageArea>
        <h1 className="Title">Lacrou, Empresa!</h1>
        <h2 className="SubTitle">
          {" "}
          Precisamos de alguns dados seus para realizar o cadastro. Vamos
          juntes?
        </h2>

        <form>
          <div class="mb-3">
            <label for="nomeEmpresa" class="form-label">
              Nome da Empresa
            </label>
            <input
              type="nomeEmpresa"
              class="form-control"
              id="nomeEmpresa"
              aria-describedby="nomeEmpresa"
              placeholder="Nome"
            />
          </div>
          <div class="mb-3">
            <label for="descricao" class="form-label">
              Breve Descrição da Empresa
            </label>
            <textarea
              type="text"
              class="form-control"
              id="descricao"
              placeholder="Descrição"
            />
          </div>
        </form>
        <Link to='/empresacadastro3'>
          <div className="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary">
              Continuar
            </button>
          </div>
        </Link>

        <p> Passo 2 de 3 </p>
      </PageArea>
    </PageContainer>
  );
};
export default Page;
