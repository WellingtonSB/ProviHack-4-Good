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
        <div className="col-md-12 justify-content-center align-items-center flex-column">
          <div className="row justify-content-center">
        <h1 className="Title">Login</h1>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8 justify-content-center">
        <form>
          <div class="mb-3 justify-content-center">
            <label for="Email" class="form-label font1">
              Email 
            </label>
            <input
              type="email"
              class="form-control AreainputPass"
              id="Email"
              aria-describedby="emailHelp"
              placeholder='escreva seu email'
            />
          </div>

          <div class="mb-3">
            <label for="senha" class="form-label font1">
              Senha
            </label>
            <input
              type="password"
              class="form-control AreainputPass"
              id="senha"
              placeholder="insira sua senha"
            />
          </div>
          <div class="mb-3 form-check align-items-center">
            <input
              type="checkbox"
              class="form-check-input"
              id="empresa"
            />
            <label class="form-check-label" for="empresa">
              Sou uma empresa
            </label>
          </div>
         
        </form>
        </div>
        </div>
        <Link to="/feed">
        <div className="row justify-content-center">
         
          <button type="submit" class="btn Frame-2 text-light ">
            Entrar
          </button>
          </div>
          </Link>
        </div>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
