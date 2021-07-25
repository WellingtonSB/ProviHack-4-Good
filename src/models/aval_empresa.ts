import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Aval_empresa = db.define('avalEmpresa', {
    //id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    empresa: {
        type: DataTypes.BIGINT
    },
    resumo: {
        type: DataTypes.STRING
    },
    ambiente_inclus: {
        type: DataTypes.TINYINT
    }, comiteLgbtquiapn: {
        type: DataTypes.TINYINT
    }, benefitsConj: {
        type: DataTypes.TINYINT
    }, funcionariosComunid: {
        type: DataTypes.TINYINT
    }, remunerBenefit: {
        type: DataTypes.TINYINT
    }, culturaValores: {
        type: DataTypes.TINYINT
    }, toiletteUnix: {
        type: DataTypes.TINYINT
    }, qualidadeVida: {
        type: DataTypes.TINYINT
    }, liderancas: {
        type: DataTypes.TINYINT
    }//fazer o relacionamento
})

export default Aval_empresa;