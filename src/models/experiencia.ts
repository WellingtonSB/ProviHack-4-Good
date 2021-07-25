import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Experiencia = db.define('experiencia', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    empresa: {
        type: DataTypes.STRING,
    },
    dataInicio: {
        type: DataTypes.DATE,
    },
    dataTermino: {
        type: DataTypes.DATE,
    },
    empAtual: {
        type: DataTypes.TINYINT,
    },
    empregoAtual: {
        type: DataTypes.STRING,
    },
    cargo: {
        type: DataTypes.STRING
    },descricao:{
        type:DataTypes.STRING
    }//extends usuario
})



export default Experiencia;