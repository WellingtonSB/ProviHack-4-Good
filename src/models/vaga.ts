import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Vaga = db.define('vaga', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    nome: {
        type: DataTypes.STRING,
    },
    descricao_vaga: {
        type: DataTypes.STRING,
    },
    beneficios: {
        type: DataTypes.STRING,
    },
    salario: {
        type: DataTypes.STRING,
    },
    link_site: {
        type: DataTypes.STRING,
    },
    aberta_fechada: {
        type: DataTypes.TINYINT
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now,
    }
})

export default Vaga;