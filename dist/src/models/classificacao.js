"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Classificacao = connection_1.default.define('Classificacao', {
    id: { type: sequelize_1.DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    remunecaoBeneficios: {
        type: sequelize_1.DataTypes.NUMBER
    }, culturaValores: {
        type: sequelize_1.DataTypes.NUMBER
    }, oportunidadeCarreira: {
        type: sequelize_1.DataTypes.NUMBER
    }, qualidadeVida: {
        type: sequelize_1.DataTypes.NUMBER
    }, nota: {
        type: sequelize_1.DataTypes.NUMBER
    }
});
exports.default = Classificacao;
//# sourceMappingURL=classificacao.js.map