import React from 'react';
//import { useState, useEffect } from 'react';
import { PageContainer } from '../../components/MainComponents';
//import Header from '../../components/partials/Header';
import { PageArea } from './styled';



const Page = () => {

  

    return (
        <> 
        <PageContainer>
            
            <PageArea>
                <h1 className="Title">Bem-vinde ao Lacrei Oportunidades</h1>
                <h2 className="SubTitle"> Aqui a incluso profissional sem discriminaçao para todo e qualquer ser humano é um princpio fundamental</h2>
                <div className="container">  
                    <button onClick="/usercadatro" className="Frame-2 Estou-procurando-emprego">Estou procurando emprego</button>
                    <button className="BTN-Secondary Empresa">Sou Empresa</button>
                </div>
        

            </PageArea>
        </PageContainer>
        </>

    )
}

export default Page;