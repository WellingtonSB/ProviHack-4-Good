import styled from "styled-components";

export const SearchArea = styled.div``;
export const PageArea = styled.div`
  margin-top: 30px;
  //width: 85.375rem;
  height: 48rem;
  padding-top: 30px;
  margin-top: 30px;
  align-items: left;
  align-content: left;
  justify-content: left;
  .Title {
    width: 918px;
    height: 31px;
    margin: 0 0 35px;
    font-family: Nunito;
    font-style: normal;
    font-weight: 200;
    font-size: 48px;
    line-height: 150%;
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
  .pesquisaVaga {
    height: 17px;
    left: 130px;
    top: 277px;
    font-family: Nunito;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 140%;
    color: #696969;
  }
  .Frame-2 {
    height: 3rem;
    // margin: 0.75rem 0 0;
    padding: 1.063rem 8.782rem 1rem 1.033rem;
    border-radius: 20px;
    border: solid 1px #000077;
    background-color: rgba(191, 219, 255, 0.14);
  }

  .BTN-Secondary {
    height: 3rem;
    padding: 10px;
    border-radius: 16px;
    background-color:  #000077;
  }

  .btn-vaga{
    width: 28rem;
    height: 2.75rem;
    padding: 10px;
    background-color:  #000077;
  }

  .bg-gradient {
    min-height: 100vh;
    min-width: 100vw;
    background: rgb(130, 185, 255);
    background: linear-gradient(
        180deg,
        rgba(93, 212, 255, 0.5) -53.39%,
        #ffffff 100%
      ),
      #f2f2f2;

    justify-content: center;
    align-items: center;
  }

  .borderBotton{
      padding-bottom: 20px;
    border-bottom: 1px solid #696969;
  }
`;
