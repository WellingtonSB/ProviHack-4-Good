import React from 'react';
import styled from 'styled-components';

export const Template = styled.body`
background: rgb(130,185,255);
background: linear-gradient(180deg, rgba(130,185,255,0.5) 11%, rgba(255,255,255,1) 100%);
 
`;

export const PageContainer = styled.div`
max-width:1000px;
margin:auto;
min-width: 100vw;
min-hight: 100vh;
display: flex;
justify-content: center;
align-itens: center
`;

export const PageTitle = styled.h1``;

export const PageBody = styled.div``;

export const ErrorMesssage = styled.div`
margin:10px 0;
background-color: #FFCACA;
color: #000;
border: 2PX solid #FF0000;
padding: 10px;
`

