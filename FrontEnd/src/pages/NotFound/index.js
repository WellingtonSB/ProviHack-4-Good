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
        <h1 className="Title">404</h1>
        <h2 className="SubTitle text-center mt-3">Ops! Algo Deu Errado</h2>
        <div className="container justify-content-center">
          <Link to="/">
            <button className="Frame-2 Estou-procurando-emprego">
              Voltar para a página inicial
            </button>
          </Link>
        </div>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
