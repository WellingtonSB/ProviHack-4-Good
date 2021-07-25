"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Experiencia = connection_1.default.define('experiencia', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    empresa: {
        type: sequelize_1.DataTypes.STRING,
    },
    dataInicio: {
        type: sequelize_1.DataTypes.DATE,
    },
    dataTermino: {
        type: sequelize_1.DataTypes.DATE,
    },
    empAtual: {
        type: sequelize_1.DataTypes.TINYINT,
    },
    empregoAtual: {
        type: sequelize_1.DataTypes.STRING,
    },
    cargo: {
        type: sequelize_1.DataTypes.STRING
    }, descricao: {
        type: sequelize_1.DataTypes.STRING
    } //extends usuario
});
exports.default = Experiencia;
//# sourceMappingURL=experiencia.js.map