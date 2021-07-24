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
    status: {
        type: DataTypes.BOOLEAN
    },
    publicacao: {
        type: DataTypes.TIME
    }
})

export default Vaga;