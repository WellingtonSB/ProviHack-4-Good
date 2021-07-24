import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Usuario = db.define('Usuario', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    nome: {
        type: DataTypes.STRING
    },
    sobrenome: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        unique:true,//unica
    },
    senha: {
        type: DataTypes.STRING,
    },
    dataNascimento: {
        type: DataTypes.DATE
    },
    genero: {
        type: DataTypes.STRING
    },
    etnia: {
        type: DataTypes.STRING
    },
    escolaridade: {
        type: DataTypes.STRING
    },
    areaAtuacao: {
        type: DataTypes.STRING
    },
    experienciaTrabalho: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.STRING
    },
    deficiencia: {
        type: DataTypes.STRING
    },
    estadoCivil: {
        type: DataTypes.STRING
    },
    createdAt:{
        type:DataTypes.DATE,
        defaultValue:Date.now,
    }
})




export default Usuario;