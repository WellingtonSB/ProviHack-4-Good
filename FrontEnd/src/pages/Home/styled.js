import styled from 'styled-components';

export const SearchArea = styled.div`


`
export const PageArea = styled.div`
margin-top: 1.875rem;
//width: 85.375rem;
height: 48rem;
padding-top: 1.875rem;
margin-top: 1.875rem;
align-items: center;
align-content: center;
.Title {
  // width: 100%;
  // height: 1.875rem;
  margin: 0 0 2.188rem;
  font-family: Nunito;
  // font-size: 3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #000000;
}
.SubTitle{
  width: 90%;
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

.Estou-procurando-emprego {
  width: 240px;
  height: 39px;
  flex-grow: 0;
  font-family: Inter;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}
.Frame-2 {
  width: 260px;
  height: 59px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 70px 22px 0 188px;
  padding: 10px;
  border-radius: 16px;
  background-color: #000077;
}
.BTN-Secondary {
  width: 260px;
  height: 59px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 10px;
  margin: 70px 188px 0 22px;
  padding: 10px;
  border-radius: 16px;
  border: solid 1px #000077;
  background-color: transparent;

}
.Empresa {
  flex: 1;
  align-self: stretch;
  flex-grow: 1;
  font-family: Inter;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #000077;
}

.bg-gradient{
  min-height: 100vh;
    min-width: 100vw;
    background: rgb(130,185,255);
    background: linear-gradient(180deg, rgba(93, 212, 255, 0.5) -53.39%, #FFFFFF 100%), #F2F2F2;

    justify-content: center;
    align-items: center;
}

`;