import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Empresas  = db.define('Empresas ', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    nome: {
        type: DataTypes.STRING
    }, tamanho: {
        type: DataTypes.STRING
    }, receita: {
        type: DataTypes.STRING
    }, tipo: {
        type: DataTypes.STRING
    }, areaAtuacao: {
        type: DataTypes.STRING
    }, setor: {
        type: DataTypes.STRING
    }, ativa: {
        type: DataTypes.BOOLEAN
    }
})

export default Empresas ;