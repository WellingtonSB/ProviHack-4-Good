import React from "react";
import { PageContainer } from "../../components/MainComponents";
import { PageArea } from "../Home/styled";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <PageContainer>
      <PageArea>
        <div className="col-md-12 flex-column d-flex align-items-center">
          <div className="row d-flex justify-content-center">
            <h1 className="Title">Lacrou, Empresa!</h1>
            <h2 className="SubTitle">
              {" "}
              Precisamos de alguns dados seus para realizar o cadastro. Vamos
              juntes?
            </h2>
          </div>
          <div className="row d-flex justify-content-center align-items-center">
            {/* <form> */}
            <div class="mb-3">
              <label for="comite" class="form-label">
                A empresa possui Comitê LGBT+ ativo?
              </label>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="comite"
                  id="comite"
                  value="true"
                />
                <label class="form-check-label" for="comite">
                  Sim
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="comite"
                  id="comite"
                  value="false"
                />
                <label class="form-check-label" for="comite">
                  Não
                </label>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center mt-3">
            {/* <form> */}
            <div class="mb-3">
              <label for="comite" class="form-label">
                A empresa possui benefícios extendidos ao cônjuge do mesmo
                gênero?
              </label>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="comite"
                  id="comite"
                  value="true"
                />
                <label class="form-check-label" for="comite">
                  Sim
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="comite"
                  id="comite"
                  value="false"
                />
                <label class="form-check-label" for="comite">
                  Não
                </label>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center mt-3">
            {/* <form> */}
            <div class="mb-3">
              <label for="comite" class="form-label">
                A empresa possui funcionários da comunidade LGBTQIAPN+?
              </label>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="comite"
                  id="comite"
                  value="true"
                />
                <label class="form-check-label" for="comite">
                  Sim
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="comite"
                  id="comite"
                  value="false"
                />
                <label class="form-check-label" for="comite">
                  Não
                </label>
              </div>
            </div>
          </div>

          <div className="row d-flex justify-content-center mt-3">
            <div class="mb-3">
              <label for="comite" class="form-label">
                A empresa possui toiletes unissex?
              </label>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="comite"
                  id="comite"
                  value="true"
                />
                <label class="form-check-label" for="comite">
                  Sim
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="comite"
                  id="comite"
                  value="false"
                />
                <label class="form-check-label" for="comite">
                  Não
                </label>
              </div>
            </div>
          </div>

          <div className="row d-grid gap-2 d-md-flex justify-content-md-end mt-3">
            <div className="col-md-12 d-flex justify-content-end">
              <Link to="/empresacadastro2">
                <button type="submit" class="btn btn-primary">
                  Continuar
                </button>
              </Link>
            </div>
          </div>

          <div className="row d-flex justify-content-start">
          <p> Passo 2 de 3 </p>
          </div>
        </div>

       
      </PageArea>
    </PageContainer>
  );
};
export default Page;
