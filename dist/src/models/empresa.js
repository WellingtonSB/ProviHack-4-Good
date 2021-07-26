"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Empresas = connection_1.default.define('empresas', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    email: {
        type: sequelize_1.DataTypes.STRING,
    }, nome: {
        type: sequelize_1.DataTypes.STRING,
    }, senha: {
        type: sequelize_1.DataTypes.STRING
    }, cnpj: {
        type: sequelize_1.DataTypes.STRING
    }, descricao: {
        type: sequelize_1.DataTypes.STRING
    }, comite: {
        type: sequelize_1.DataTypes.TINYINT
    }, funcionarios: {
        type: sequelize_1.DataTypes.TINYINT
    }, beneficios: {
        type: sequelize_1.DataTypes.TINYINT
    }, empresaValidada: {
        type: sequelize_1.DataTypes.TINYINT
    }, toiletteUnis: {
        type: sequelize_1.DataTypes.TINYINT
    }, sinalizacaoDesniveis: {
        type: sequelize_1.DataTypes.TINYINT
    }, espCadeirasRodas: {
        type: sequelize_1.DataTypes.TINYINT
    }, vagasEntradas: {
        type: sequelize_1.DataTypes.TINYINT
    }, rotaAcessivel: {
        type: sequelize_1.DataTypes.TINYINT
    }, vaoPortas: {
        type: sequelize_1.DataTypes.TINYINT
    }, sanitariosRotas: {
        type: sequelize_1.DataTypes.TINYINT
    }, mensagensTdd: {
        type: sequelize_1.DataTypes.TINYINT
    }, mesasAcess: {
        type: sequelize_1.DataTypes.TINYINT
    }, simboloAcesso: {
        type: sequelize_1.DataTypes.TINYINT
    }, sinalTatil: {
        type: sequelize_1.DataTypes.TINYINT
    }, sinalSom: {
        type: sequelize_1.DataTypes.TINYINT
    }, elevador: {
        type: sequelize_1.DataTypes.TINYINT
    } //relacionamento com cadidatos e empresa
});
exports.default = Empresas;
//# sourceMappingURL=empresa.js.map