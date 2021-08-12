import React from "react";
//import { useState, useEffect } from 'react';
import { PageContainer } from "../../components/MainComponents";
//import Header from '../../components/partials/Header';
import { PageArea } from "./styled";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <PageContainer>
      <PageArea>
        
        <h1 className="Title">Bem-vinde ao Lacrei Oportunidades</h1>
        
        <h2 className="SubTitle text-center mt-3">
          {" "}
          Aqui, a inclusão profissional sem discriminação para todo e qualquer
          ser humano é um princípio fundamental.
        </h2>
        <div className="container">
          <Link to="/usercadastro">
            <button
              onClick="/usercadatro"
              className="Frame-2 Estou-procurando-emprego"
            >
              Estou procurando emprego
            </button>
          </Link>
          <Link to="/empresacadastro">
            <button
              onClick="/empresacadastro"
              className="BTN-Secondary Empresa"
            >
              Sou Empresa
            </button>
          </Link>
        </div>

      </PageArea>
    </PageContainer>
  );
};

export default Page;
