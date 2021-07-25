import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Aval_empresa = db.define('Aval_empresa', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    empresa: {
        type: DataTypes.BIGINT
    },
    resumo: {
        type: DataTypes.STRING
    },
    ambiente_inclus: {
        type: DataTypes.TINYINT
    }, comite_lgbtquiapn: {
        type: DataTypes.TINYINT
    }, benefits_conj: {
        type: DataTypes.TINYINT
    }, funcionarios_comunid: {
        type: DataTypes.TINYINT
    }, remuner_e_benefit: {
        type: DataTypes.TINYINT
    }, cultura_valores: {
        type: DataTypes.TINYINT
    }, toilette_unis: {
        type: DataTypes.TINYINT
    }, qualidade_vida: {
        type: DataTypes.TINYINT
    }, liderancas: {
        type: DataTypes.TINYINT
    }//fazer o relacionamento
})

export default Aval_empresa;