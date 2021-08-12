import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents';
import { PageArea } from './styled';
import useAPI from '../../helpers/LacreiApi'
import { doLogin } from '../../helpers/AuthHandler';


const Page = () => {

    const api =useAPI();

    const [ nome, setName ] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        console.log("teste");
        e.preventDefault();
        setDisabled(true);
        setError('');

        const json = await api.registerUser(nome, email, senha);
        console.log("teste");

       if(json.error) {
            setError(json.error);
        } else {
            doLogin(json.senha);
            window.location.href = '/';
        }
        window.location.href = '/';

        setDisabled(false);

        }




    
    return (
        <PageContainer>
            <PageArea >
            <h1 className="Title">Cadastro</h1>

            <div className="container">
            <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Nome*</div>
                        <div className="area--input">
                        <input 
                            className="Rectangle-19 "
                            type="text" 
                            disabled={disabled}
                            value={nome}
                            onChange={e=>setName(e.target.value)}
                            required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Email*</div>
                        <div className="area--input">
                        <input 
                           className="Rectangle-19"
                            type="email" 
                            disabled={disabled}
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha*</div>
                        <div className="area--input">
                        <input 
                            className="Rectangle-19"
                            type="password" 
                            disabled={disabled}  
                            value={senha}
                            onChange={e=>setPassword(e.target.value)}
                            required
                            />
                        </div>
                    </label>
                    
                    <label className="area">
                        <div className="area--title"></div>
                        <div className="Cadastrar">
                            <button  disabled={disabled} className="Frame-2 Cadastrar"  >Cadastrar</button>
                        </div>
                        <p className="politica">Ao clicar no botão "Cadastrar", você está criando uma conta na Lacrei Oportunidades e concorda com os nossos Termos de Uso e Privacidade.</p>
                    </label>
                </form>
                <div >
                    <h2 className="SubTitle" >Precisamos de alguns dados seus para realizar o cadastro. Não se preocupa, eles estarão seguros com a gente Vamos juntes?</h2>
                    </div> 

                    </div>
            

          </PageArea>

        </PageContainer>
        

    )
}

export default Page;