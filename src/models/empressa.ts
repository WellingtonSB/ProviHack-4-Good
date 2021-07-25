import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Empresas  = db.define('Empresas ', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    email_empresa: {
        type: DataTypes.STRING,
    }, nome_empresa: {
        type: DataTypes.STRING,
    }, tamanho: {
        type: DataTypes.STRING
    }, senha_empresa: {
        type: DataTypes.STRING
    }, cnpj: {
        type: DataTypes.STRING
    }, descricao: {
        type: DataTypes.STRING
    }, comite_lgbtquiapn: {
        type: DataTypes.TINYINT
    }, funcionarios_comunid: {
        type: DataTypes.TINYINT
    }, benefits: {
        type: DataTypes.TINYINT
    }, empresa_validada: {
        type: DataTypes.TINYINT
    }, toilette_unis: {
        type: DataTypes.TINYINT
    }, sinalizacao_desniveis: {
        type: DataTypes.TINYINT
    }, esp_cadeiras_rodas: {
        type: DataTypes.TINYINT
    }, vagas_entradas: {
        type: DataTypes.TINYINT
    }, rota_acessivel: {
        type: DataTypes.TINYINT
    }, vao_portas: {
        type: DataTypes.TINYINT
    }, sanitarios_rotas: {
        type: DataTypes.TINYINT
    }, mensagens_tdd: {
        type: DataTypes.TINYINT
    }, mesas_acess: {
        type: DataTypes.TINYINT
    }, simbolo_acesso: {
        type: DataTypes.TINYINT
    }, sinal_tatil: {
        type: DataTypes.TINYINT
    }, sinal_som: {
        type: DataTypes.TINYINT
    }, elevador: {
        type: DataTypes.TINYINT
    }//relacionamento com cadidatos e empresa
})

export default Empresas ;