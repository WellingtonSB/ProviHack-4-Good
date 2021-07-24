import React from "react";
import { PageContainer } from "../../components/MainComponents";
import { PageArea } from "../CadastroEmpresa/styled";
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
            <label for="exampleInputEmail1" class="form-label font1">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="meu@email.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Senha
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Insira sua senha"
            />
          </div>
        </form>
        <Link to='/empresacadastro2'>
          <div className="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary">
              Continuar
            </button>
          </div>
        </Link>

        <p> Passo 1 de 3 </p>
      </PageArea>
    </PageContainer>
  );
};
export default Page;
