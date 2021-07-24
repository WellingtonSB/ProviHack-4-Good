import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Vaga = db.define('vaga', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    escolaridade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipoVaga: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN
    },
    publicacao: {
        type: DataTypes.TIME
    }
})

export default Vaga;