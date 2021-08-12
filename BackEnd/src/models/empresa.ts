import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Empresas  = db.define('empresas', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    email: {
        type: DataTypes.STRING,
    }, nome: {
        type: DataTypes.STRING,
    }, senha: {
        type: DataTypes.STRING
    }, cnpj: {
        type: DataTypes.STRING
    }, descricao: {
        type: DataTypes.STRING
    }, comite: {
        type: DataTypes.TINYINT
    }, funcionarios: {
        type: DataTypes.TINYINT
    }, beneficios: {
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