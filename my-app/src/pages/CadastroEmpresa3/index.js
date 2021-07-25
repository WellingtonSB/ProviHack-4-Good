import React from "react";
import { PageContainer } from "../../components/MainComponents";
import { PageArea } from "../CadastroEmpresa3/styled";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <PageContainer>
      <PageArea>
        <div className="col-md-12 flex-column d-flex ">
          <div className="row d-flex justify-content-start">
            <p className="passo mb-3"> Passo 3 de 3 </p>
          </div>
          <div className="row d-flex justify-content-center">
            <h1 className="Title">Lacrou, Empresa!</h1>
            <h2 className="SubTitle">
              {" "}
              Precisamos de alguns dados seus para realizar o cadastro. Vamos
              juntes?
            </h2>
          </div>
          <div className="row d-flex">
            {/* <form> */}
            <div class="mb-3">
              <label for="comite" class="form-label">
                Fatores de inclusão // Comunidade LGBTQIAPN+
              </label>
            </div>
            <p className="form-check-label">
              Selecione os itens que a sua empresa possui:{" "}
            </p>
          </div>
          <div className="row d-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                A minha empresa possui comitê LGBTQIAPN+ ativo.
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                A minha empresa possui benefícios extendidos ao cônjuge do mesmo
                gênero.
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                A minha empresa possui comitê LGBTQIAPN+ ativo.
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                A minha empresa possui toiletes unissex.
              </label>
            </div>
          </div>

          <div className="row d-flex mt-3">
            {/* <form> */}
            <div class="mb-3">
              <label for="comite" class="form-label">
                Fatores de inclusão // Acessibilidade
              </label>
            </div>
            <p className="form-check-label">
              Selecione os itens que a sua empresa possui:{" "}
            </p>
          </div>
          <div className="row d-flex">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                O seu estabelecimento conta com estrutura e sinalização adequada
                para quem se move com equipamentos auxiliares, como muletas? Por
                exemplo, alertando sobre desníveis.
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                O seu estabelecimento conta com um espaço de deslocamento para
                uma cadeira de rodas equivalente a um perímetro de 0,8 a 1,2 m
                para cadeirantes? A área de circulação deve respeitar essas
                medidas e prever espaço suficiente para manobras.
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                As vagas de estacionamento reservadas para portadores de
                deficiência estão localizadas em área próxima à entrada do
                estabelecimento, e possuem acesso direto ao local, de forma
                acessível? Também é necessário que estejam sinalizadas
                adequadamente.
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" for="flexCheckChecked">
                O seu estabelecimento possui uma rota acessível, ou um trajeto
                contínuo, desobstruído e sinalizado, que conecta os ambientes
                externos e internos dos espaços e edificações, e que possa ser
                utilizado de forma autônoma e segura por todas as pessoas,
                inclusive aquelas com deficiência? A rota acessível deve também
                levar em conta a parte externa, o que exige, por exemplo, a
                instalação de rampas.
              </label>
            </div>
            <div className="row d-flex">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  As portas do seu estabelecimento possuem um vão livre de no
                  mínimo 0,8m e altura mínima de 2,10? Além disso, as maçanetas
                  estão instaladas em uma altura entre 0,9 m e 1,10 m e podem
                  ser operadas em um único movimento, sem exigir muito esforço?
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  Os sanitários do seu estabelecimento estão instalados junto às
                  rotas acessíveis e integrados às demais instalações
                  sanitárias? Caso estejam isolados, eles possuem um botão de
                  emergência para o caso de quedas?
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Se o seu estabelecimento é de grande porte, como centros
                  comerciais, são disponibilizados telefones que recebem e
                  transmitem mensagens (TDD) para a comunicação de deficientes
                  auditivos?
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                  O seu estabelecimento possui mesas de trabalho acessíveis para
                  pessoas com cadeiras de rodas a uma altura entre 0,75 m e 0,85
                  m e possuem avanço até no máximo de 0,50 m?
                </label>
              </div>
            </div>
            <div className="row d-flex">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                Os equipamentos e serviços de acessibilidade do seu estabelecimento estão indicados conforme o Símbolo Internacional de Acesso (SAI)?
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                O seu estabelecimento possui sinalização tátil dirigidas para pessoas com deficiência visual e cegas? A representação pode se dar através de relevos ou na linguagem Braille.
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                O seu estabelecimento possui sinalização sonora destinada aos deficientes visuais em casos de emergência ou perigo?
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                O seu estabelecimento possui sinalização sonora destinada aos deficientes visuais em casos de emergência ou perigo?
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckChecked"
                />
                <label class="form-check-label" for="flexCheckChecked">
                Se o seu estabelecimento dispõe de elevadores, estão instalados nesses equipamentos, sistemas de proteção e reabertura de portas para os casos de obstrução durante o seu fechamento? O sistema deve proteger o espaço entre 5cm e 120 cm, contados a partir do piso do elevador, e conter, no mínimo, 16 feixes de luz interruptores. Os elevadores devem ter espaço suficiente para manobras efetuadas por cadeirantes.
                </label>
              </div>
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex mt-3">
            <div className="col-md-10 d-flex justify-content-end">
              <Link to="/feed">
                <button type="submit" class="btn Frame-2 Cadastrar mt-3">
                  Finalizar Cadastro
                </button>
              </Link>
            </div>
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
};
export default Page;
