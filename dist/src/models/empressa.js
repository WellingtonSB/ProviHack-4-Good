"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Empresas = connection_1.default.define('Empresas ', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    nome: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    }, tamanho: {
        type: sequelize_1.DataTypes.STRING
    }, receita: {
        type: sequelize_1.DataTypes.STRING
    }, tipo: {
        type: sequelize_1.DataTypes.STRING
    }, areaAtuacao: {
        type: sequelize_1.DataTypes.STRING
    }, setor: {
        type: sequelize_1.DataTypes.STRING
    }, ativa: {
        type: sequelize_1.DataTypes.BOOLEAN
    }
});
exports.default = Empresas;
//# sourceMappingURL=empressa.js.map