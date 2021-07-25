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
        type: sequelize_1.DataTypes.STRING,
        unique: true, //unico
    },
    senha: {
        type: sequelize_1.DataTypes.STRING,
    },
    dataNascimento: {
        type: sequelize_1.DataTypes.DATE
    },
    idGenero: {
        type: sequelize_1.DataTypes.INTEGER
    },
    sexualidade: {
        type: sequelize_1.DataTypes.INTEGER
    },
    etnia: {
        type: sequelize_1.DataTypes.INTEGER
    },
    escolaridade: {
        type: sequelize_1.DataTypes.INTEGER
    },
    tipoDeficiencia: {
        type: sequelize_1.DataTypes.STRING
    },
    cursos: {
        type: sequelize_1.DataTypes.STRING
    },
    telefone: {
        type: sequelize_1.DataTypes.STRING
    },
    deficiencia: {
        type: sequelize_1.DataTypes.TINYINT
    },
    linkedin: {
        type: sequelize_1.DataTypes.STRING
    },
    estadoCivil: {
        type: sequelize_1.DataTypes.STRING
    }, areaAtuacao: {
        type: sequelize_1.DataTypes.STRING
    }, status: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: Date.now,
    }
});
exports.default = Usuario;
//# sourceMappingURL=usuario.js.map