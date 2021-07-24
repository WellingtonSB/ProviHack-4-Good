import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Classificacao = db.define('Classificacao', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    remunecaoBeneficios: {
        type: DataTypes.NUMBER
    }, culturaValores: {
        type: DataTypes.NUMBER
    }, oportunidadeCarreira: {
        type: DataTypes.NUMBER
    }, qualidadeVida: {
        type: DataTypes.NUMBER
    }, nota: {
        type: DataTypes.NUMBER
    }
})

export default Classificacao;