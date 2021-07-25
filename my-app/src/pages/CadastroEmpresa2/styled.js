import styled from "styled-components";

export const PageArea = styled.div`
  align-items: left;
  align-content: left;
  .descricao {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 150%;
  }
  .container {
    display: flex;
  }

  .AreainputPass {
    width: 50rem;
    height: 10rem;
    margin: 0.5rem 0 0;
    padding: 1.063rem 8.782rem 1rem 1.033rem;
    border-radius: 20px;
    border: solid 1px #000077;
    background-color: rgba(191, 219, 255, 0.14);
  }

  .Frame-2 {
    position: absolute;
    width: 15rem;
    height: 2.75rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 16px;
    background-color: #000077;
  }

  .Cadastrar {
    position: absolute;
    width: 15rem;
    height: 2.75rem;
    flex-grow: 0;
    font-family: Inter;
    font-size: 1rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }

  .passo {
    width: 166px;
    height: 15px;
    left: 355px;
    top: 845px;

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 120%;

    color: #000077;
  }
`;
