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
        unique: true,//unico
    },
    senha: {
        type: DataTypes.STRING,
    },
    dataNascimento: {
        type: DataTypes.DATE
    },
    idGenero: {
        type: DataTypes.INTEGER
    },
    sexualidade: {
        type: DataTypes.INTEGER
    },
    etnia: {
        type: DataTypes.INTEGER
    },
    escolaridade: {
        type: DataTypes.INTEGER
    },
    tipoDeficiencia: {
        type: DataTypes.STRING
    },
    cursos: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.STRING
    },
    deficiencia: {
        type: DataTypes.TINYINT
    },
    linkedin: {
        type: DataTypes.STRING
    },
    estadoCivil: {
        type: DataTypes.STRING
    }, areaAtuacao: {
        type: DataTypes.STRING
    }, status: {
        type: DataTypes.BOOLEAN
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Date.now,
    }
})

export default Usuario;