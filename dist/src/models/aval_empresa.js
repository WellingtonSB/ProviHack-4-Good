"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Aval_empresa = connection_1.default.define('avalEmpresa', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    empresa: {
        type: sequelize_1.DataTypes.BIGINT
    },
    resumo: {
        type: sequelize_1.DataTypes.STRING
    },
    ambiente_inclus: {
        type: sequelize_1.DataTypes.TINYINT
    }, comiteLgbtquiapn: {
        type: sequelize_1.DataTypes.TINYINT
    }, benefitsConj: {
        type: sequelize_1.DataTypes.TINYINT
    }, funcionariosComunid: {
        type: sequelize_1.DataTypes.TINYINT
    }, remunerBenefit: {
        type: sequelize_1.DataTypes.TINYINT
    }, culturaValores: {
        type: sequelize_1.DataTypes.TINYINT
    }, toiletteUnix: {
        type: sequelize_1.DataTypes.TINYINT
    }, qualidadeVida: {
        type: sequelize_1.DataTypes.TINYINT
    }, liderancas: {
        type: sequelize_1.DataTypes.TINYINT
    } //fazer o relacionamento
});
exports.default = Aval_empresa;
//# sourceMappingURL=aval_empresa.js.map