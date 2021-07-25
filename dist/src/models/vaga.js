"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Vaga = connection_1.default.define('vaga', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    nome: {
        type: sequelize_1.DataTypes.STRING,
    },
    descricaoVaga: {
        type: sequelize_1.DataTypes.STRING,
    },
    beneficios: {
        type: sequelize_1.DataTypes.STRING,
    },
    salario: {
        type: sequelize_1.DataTypes.STRING,
    },
    linkSite: {
        type: sequelize_1.DataTypes.STRING,
    },
    abertaFechada: {
        type: sequelize_1.DataTypes.TINYINT
    }
});
exports.default = Vaga;
//# sourceMappingURL=vaga.js.map