import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Usuario = db.define('Usuarie', {
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
    data_nascimento: {
        type: DataTypes.DATE
    },
    id_genero: {
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
    tipodeficiencia: {
        type: DataTypes.STRING
    },
    cursos: {
        type: DataTypes.STRING
    },
    telefonecontato: {
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
    }, area_atuacao: {
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