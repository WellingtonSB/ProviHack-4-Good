"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inativarVaga = exports.deleteVaga = exports.putVaga = exports.postVaga = exports.getVagaById = exports.getAllVagas = void 0;
const vaga_1 = __importDefault(require("../models/vaga"));
const getAllVagas = async (req, res) => {
    const vaga = await vaga_1.default.findAll();
    res.json(vaga);
};
exports.getAllVagas = getAllVagas;
const getVagaById = async (req, res) => {
    const { id } = req.params;
    const vaga = await vaga_1.default.findByPk(id);
    if (vaga) {
        res.json(vaga);
    }
    else {
        res.status(404).json({
            msg: `{id} não existe no banco de dados`
        });
    }
};
exports.getVagaById = getVagaById;
const postVaga = async (req, res) => {
    const { body } = req;
    //criar um if que só permite que a empresa crie a vaga e seu cadastro estiver ok.
    try {
        const existeVaga = await vaga_1.default.findOne({
            where: {
                nome: body.nome
            }
        });
        if (existeVaga) {
            return res.status(400).json({
                msg: 'Vaga existente: ' + body.nome
            });
        }
        const vaga = await vaga_1.default.create(body);
        await vaga.save();
        res.json(vaga);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
};
exports.postVaga = postVaga;
const putVaga = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const vaga = await vaga_1.default.findByPk(id);
        if (!vaga) {
            return res.status(404).json({
                msg: 'vaga nao existe'
            });
        }
        await vaga.update(body);
        res.json(vaga);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
};
exports.putVaga = putVaga;
const deleteVaga = async (req, res) => {
    const { id } = req.params;
    const vaga = await vaga_1.default.findByPk(id);
    if (!vaga) {
        return res.status(404).json({
            msg: 'A vaga nao existe'
        });
    }
    await vaga.destroy();
    res.json(vaga);
};
exports.deleteVaga = deleteVaga;
//classe nao instanciada
const inativarVaga = async (req, res) => {
    const { id } = req.params;
    const vaga = await vaga_1.default.findByPk(id);
    if (!vaga) {
        return res.status(404).json({
            msg: 'A vaga nao existe'
        });
    }
    await vaga.update({ status: false });
    res.json(vaga);
};
exports.inativarVaga = inativarVaga;
//# sourceMappingURL=vagaController.js.map