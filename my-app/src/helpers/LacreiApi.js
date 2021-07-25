import Cookies from "js-cookie";
import qs from 'qs';

const BASEAPI = 'href="https://userway.org/%22%3Ewebsite';

const apiFetchPost = async (endpoint, body) => {

    if(!body.token) {
        let token= Cookies.get('token')
        if(token){
            body.token = token;
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'aplicaion/json'
        },
        body:JSON.stringify(body)
    });
    const json = await res.json();

    if(json.notallowed) {
        window.location.href ='/signin';
        return;
    }


    return json
}


const apiFetchGet = async (endpoint, body = []) => {

    if(!body.token) {
        let token= Cookies.get('token')
        if(token){
            body.token = token;
        }
    }

    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();

    if(json.notallowed) {
        window.location.href ='/signin';
        return;
    }


    return json
}


const LacreiApi = {

    //user login

    login:async (email, password) => {
        
        const json = await apiFetchPost(
            '/user/signin',
            {email, password}
        );

        return json;
    },

    //user cadastro
    registerUser:async (name, email, password) => {
        const json = await apiFetchPost(
            '/user/signup',
            {name, email, password}
        );
        return json;

    },

    //Registro de informações pessoais
    registerInfPessoal:async (data_nascimento, telefonecontato, linkedin) => {
        const json = await apiFetchPost(
            '/user/signup',
            {data_nascimento, telefonecontato, linkedin}
        );
        return json;

    },

    //Registro de Identificação
    registerIdentificação:async (data_nascimento, telefonecontato, linkedin) => {
        const json = await apiFetchPost(
            '/user/signup',
            {data_nascimento, telefonecontato, linkedin}
        );
        return json;

    },

    

    //Avaliação de Empresas
    registerVagas:async (nome, descricao_vaga, salario) => {
        const json = await apiFetchPost(
            '/empresa/vagas',
            {nome, descricao_vaga, salario}
        );
        return json;

    },

    registerEmpresa:async (name, email, password, descricao) => {
        const json = await apiFetchPost(
            '/empresa/signup',
            {name, email, password, descricao}
        );
        return json;

    },

    getVagas:async () => {
        const json = await apiFetchGet(
            '/vaga'
        );
        return json.vaga;
    },

    getGenero:async () => {
        const json = await apiFetchGet(
            '/genero'
        );
        return json.genero;
    },

    getSexo:async () => {
        const json = await apiFetchGet(
            '/sexualidade'
        );
        return json.sexualidade;
    },

    getEmpresa:async () => {
        const json = await apiFetchGet(
            '/genero'
        );
        return json.genero;
    },

    getEtnia:async () => {
        const json = await apiFetchGet(
            '/etnia'
        );
        return json.etnia;
    },

    getEscolaridade:async () => {
        const json = await apiFetchGet(
            '/escolaridade'
        );
        return json.escolaridade;
    },

    getProfissao:async () => {
        const json = await apiFetchGet(
            '/area_atuacao'
        );
        return json.area_atuacao;
    },






    getEmpresa:async () => {
        const json = await apiFetchGet(
            '/categories'
        );
        return json.empresa;
    },

    getAds: async (options) => {
        const json = await apiFetchGet(
            '/ad/list',
            options
        );
        return json;
    }
//vagas
//Empresa 
};

export default () => LacreiApi;