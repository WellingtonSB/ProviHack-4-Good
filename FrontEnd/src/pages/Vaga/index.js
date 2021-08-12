import React from "react";
//import { useState, useEffect } from 'react';
import { PageContainer } from "../../components/MainComponents";
//import Header from '../../components/partials/Header';
import { PageArea } from "../feed/styled";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <PageContainer>
      <PageArea>
        <div className="container justify-content-center">
          <div className="col-md-10">
            <div className="row justify-content-start mb-5">
              <h2 className="text-start"> Nome da Vaga </h2>
              <p> Empresa </p>
            </div>
            <div className="row justify-content-start">
              <h4>Sobre a empresa </h4>
              <p>
                A Provi é lider de mercado de financiamento de estudos. Além
                disso, estamos catalogados com uma empresa Great Place To Work.
                Para afirmar nossas políticas de inclusão, dispomos dos
                seguintes procedimentos em nossa empresa:
              </p>
            </div>
            <div className="row mt-3">
              <ul>
                <li>Possuímos ambiente inclusivo;</li>
                <li>Possuímos comitê LGBTQIAPN+ ativo; </li>
                <li>
                  Possui benefícios extendidos ao cônjuge do mesmo gênero.
                </li>
                <li>
                  Temos em nossa força de trabalho funcionários da comunidade
                  LGBTQIAPN+;{" "}
                </li>
                <li>Possuímos toilete unissex;</li>
                <li>Entre outros</li>
              </ul>
            </div>
            <div className="row mt-3">
              <h4> Sobre a empresa</h4>
              <p>
                O que um Operador de Teleatendimento I faz? Encanta e surpreende
                o cliente que procura pelos serviços do Grupo Provi, atendendo a
                marca Labs b+!
              </p>
              <p>
                Por ser uma empresa que presta serviços em saúde diagnóstica,
                este profissional vai realizar agendamento de exames
                laboratoriais e garantir que as informações necessárias para a
                realização do exame, tenham sido passadas para o cliente;
              </p>
              <p>
                O Operador de Teleatendimento tem metas diárias que garantem a
                qualidade do trabalho individual e do Grupo! Este profissional
                trabalha na Central própria de Atendimento ao Cliente do Grupo
                Provi.
              </p>
            </div>
              <Link to="#">
              <div className="row d-flex justify-content-center mt-3">
                <a  class="btn btn-vaga text-light">
                  Aplicar para a vaga
                </a>
                </div>
              </Link>
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
