import styled from "styled-components";

export const HeaderArea = styled.div`
  

  display: flex;
  align-items: center;
  width: 100vw;
  height: 20px;
  // margin: 0 167px 304.2px 32px;
  width: 90%;
  height: 80px;
  // margin: 0 167px 100px 32px;
  padding: 13px 0;
  margin-bottom: 20px;

  

  .BTN-Entrar {
  width: 10.375rem;
  height: 2.75rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  // gap: 10px;
  margin: 3px 0 2px 100px;
  padding: 10px;
  border-radius: 30px;
  border: solid 1px #000077;
  background-color: transparent;
  font-family: Inter;

}
  .container {
    max-width: 100vw;
    margin: auto;
    display: flex;
}
a {
    text-decoration: none;

  font-family: Nunito;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
}

.logo {
    flex: 1;
    display: flex;
    width: 3.375rem;
     height: 3.375rem;
     flex-grow: 0;
     margin: 0 14.25rem 0 0;
     padding: 0.387rem 0 0;
}

    
    

nav {
    padding-top:10px;
    padding-bottom:10px;

    ul, li {
        margin:0;
        padding:0;
        list-style:none;
    }

    ul {
        display:flex;
        align-items:center;
        height:40px;
    }

    li {
        margin-left:20px;
        margin-right:20px
        }
        .a, .button {
            border:0;
            background: none;
            color:#000;
            font-size:14px;
            text-decoration:none;
            cursor:pointer;
            outline:0;

            &:hover {
                color:#999;
           
            }
        
    }
}

.Entrar {
  flex-grow: 0;
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
  


`