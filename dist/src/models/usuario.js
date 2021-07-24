"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('Usuario', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    nome: {
        type: sequelize_1.DataTypes.STRING
    },
    sobrenome: {
        type: sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes.STRING
    },
    senha: {
        type: sequelize_1.DataTypes.STRING
    },
    dataNascimento: {
        type: sequelize_1.DataTypes.DATE
    },
    genero: {
        type: sequelize_1.DataTypes.STRING
    },
    etnia: {
        type: sequelize_1.DataTypes.STRING
    },
    escolaridade: {
        type: sequelize_1.DataTypes.STRING
    },
    areaAtuacao: {
        type: sequelize_1.DataTypes.STRING
    },
    experienciaTrabalho: {
        type: sequelize_1.DataTypes.STRING
    },
    telefone: {
        type: sequelize_1.DataTypes.STRING
    },
    deficiencia: {
        type: sequelize_1.DataTypes.STRING
    },
    estadoCivil: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map