import React from "react";
import { PageContainer } from "../../components/MainComponents";
import { PageArea } from "../CadastroEmpresa/styled";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <PageContainer>
      <PageArea>
        <h1 className="Title"> Cadastro da Empresa</h1>
        <p className="text-muted mb-3"> *Campos obrigatórios </p>

        <form>
          <div class="mb-3">
            <label for="nomeEmpresa" class="form-label font1">
              Nome da Empresa*
            </label>
            <input
              type="email"
              class="form-control AreainputPass"
              id="nomeEmpresa"
              aria-describedby="nomeEmpresa"
              placeholder="Como a empresa se chama?"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label font1">
              Email
            </label>
            <input
              type="email"
              class="form-control AreainputPass"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="meu@email.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label font1">
              Senha
            </label>
            <input
              type="password"
              class="form-control AreainputPass"
              id="exampleInputPassword1"
              placeholder="Insira sua senha"
            />
          </div>
          <div className=" d-flex justify-content-start">
            <Link to="/empresacadastro2">
              <button
                type="submit"
                class="btn Frame-2 Cadastrar text-decoration-none mt-3"
              >
                Continuar
              </button>
            </Link>
          </div>
          <p className="concordo mt-3"> Ao clicar no botão "Cadastrar", você está criando uma conta na Lacrei Oportunidades e concorda com os nossos Termos de Uso e Política de Privacidade. </p>

        </form>
      </PageArea>
    </PageContainer>
  );
};
export default Page;
