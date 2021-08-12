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
        <h1 className="Title">Precisa de ajuda para preencher o cadastro?</h1>
        <h2 className="SubTitle text-center">Clique no botão abaixo apra entrar em contato com alguém da nossa equipe ️‍🌈</h2>
        <div className="container justify-content-center">
          <Link to="/">
            <button className="Frame-2 Estou-procurando-emprego">
              Preciso de ajuda
            </button>
          </Link>
        </div>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
