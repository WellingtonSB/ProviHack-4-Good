import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Experiencia = db.define('experiencia', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    empresa: {
        type: DataTypes.STRING,
    },
    data_inicio: {
        type: DataTypes.DATE,
    },
    data_termino: {
        type: DataTypes.DATE,
    },
    emp_atual: {
        type: DataTypes.TINYINT,
    },
    emprego_atual: {
        type: DataTypes.STRING,
    },
    cargo: {
        type: DataTypes.STRING
    },descricao:{
        type:DataTypes.STRING
    }//extends usuario
})



export default Experiencia;