import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Empresas  = db.define('empresas', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    emailEmpresa: {
        type: DataTypes.STRING,
    }, nomeEmpresa: {
        type: DataTypes.STRING,
    }, senhaEmpresa: {
        type: DataTypes.STRING
    }, cnpj: {
        type: DataTypes.STRING
    }, descricao: {
        type: DataTypes.STRING
    }, comiteLgbtquiapn: {
        type: DataTypes.TINYINT
    }, funcionariosComunid: {
        type: DataTypes.TINYINT
    }, benefits: {
        type: DataTypes.TINYINT
    }, empresaValidada: {
        type: DataTypes.TINYINT
    }, toiletteUnis: {
        type: DataTypes.TINYINT
    }, sinalizacaoDesniveis: {
        type: DataTypes.TINYINT
    }, espCadeirasRodas: {
        type: DataTypes.TINYINT
    }, vagasEntradas: {
        type: DataTypes.TINYINT
    }, rotaAcessivel: {
        type: DataTypes.TINYINT
    }, vaoPortas: {
        type: DataTypes.TINYINT
    }, sanitariosRotas: {
        type: DataTypes.TINYINT
    }, mensagensTdd: {
        type: DataTypes.TINYINT
    }, mesasAcess: {
        type: DataTypes.TINYINT
    }, simboloAcesso: {
        type: DataTypes.TINYINT
    }, sinalTatil: {
        type: DataTypes.TINYINT
    }, sinalSom: {
        type: DataTypes.TINYINT
    }, elevador: {
        type: DataTypes.TINYINT
    }//relacionamento com cadidatos e empresa
})

export default Empresas ;