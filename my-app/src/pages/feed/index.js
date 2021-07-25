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
        <div className="container">
          <div className="col-md-12">
            <div className="row d-flex justify-content-start">
              <h2 className="text-start Title"> Olá, Marcela </h2>
            </div>
            <div className="row mt-5">
              <label for="pesquisaVaga" class="form-label pesquisaVaga mb-3">
                Pesquisar vaga
              </label>
            </div>
            <div className="row mt-3 borderBotton ">
              <div class="input-group mb-3 align-items-center">
                <input
                  type="text"
                  class="form-control Frame-2"
                  placeholder="Ex: Gerente de RH"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn BTN-Secondary text-light"
                  type="button"
                  id="button-addon2"
                >
                  Pesquisar
                </button>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                  <div class="card border-primary mb-3">
                    <div class="card-body">
                      <h5 class="card-title">Nome da Vaga</h5>
                      <p class="card-text">
                       <p> Local: XXXXX </p> 

                       <p> Nível: XXXXX </p> 
                      </p>
                      <a href="#" class="btn btn-vaga text-light">
                        Ver Vaga
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
