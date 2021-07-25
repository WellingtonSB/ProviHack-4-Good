import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Vaga = db.define('vaga', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    nome: {
        type: DataTypes.STRING,
    },
    descricaoVaga: {
        type: DataTypes.STRING,
    },
    beneficios: {
        type: DataTypes.STRING,
    },
    salario: {
        type: DataTypes.STRING,
    },
    linkSite: {
        type: DataTypes.STRING,
    },
    abertaFechada: {
        type: DataTypes.TINYINT
    }
})

export default Vaga;