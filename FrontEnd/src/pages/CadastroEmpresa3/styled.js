import styled from "styled-components";

export const PageArea = styled.div`
  align-items: center;
  align-content: center;
  .Title {
    width: 918px;
    height: 31px;
    margin: 0 0 35px;
    font-family: Nunito;
    font-size: 48px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
  }
  .SubTitle {
    width: 730px;
    height: 53px;
    margin: 35px 94px 70px;
    font-family: Inter;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #000000;
  }
  .container {
    display: flex;
  }

  .row {
    width: 730px;
    left: 355px;
    top: 387px;
  }

  .form-label {
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 150%;
    margim-bottom: 15px;
  }

  .form-check-label {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 150%;
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
