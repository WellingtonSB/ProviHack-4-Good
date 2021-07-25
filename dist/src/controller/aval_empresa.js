"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAvaliacao = exports.putAvaliacao = exports.postAvaliacao = exports.getAvaliacaolById = exports.getAvaliacaoAval = void 0;
const aval_empresa_1 = __importDefault(require("../models/aval_empresa"));
const getAvaliacaoAval = async (req, res) => {
    const avalEmpresa = await aval_empresa_1.default.findAll();
    res.json(avalEmpresa);
};
exports.getAvaliacaoAval = getAvaliacaoAval;
const getAvaliacaolById = async (req, res) => {
    const { id } = req.params;
    const avalEmpresa = await aval_empresa_1.default.findByPk(id);
    if (avalEmpresa) {
        res.json(avalEmpresa);
    }
    else {
        res.status(404).json({
            msg: `{id} não existe no banco de dados`
        });
    }
};
exports.getAvaliacaolById = getAvaliacaolById;
const postAvaliacao = async (req, res) => {
    const { body } = req;
    try {
        const avalEmpresa = await aval_empresa_1.default.create(body);
        await avalEmpresa.save();
        res.json(avalEmpresa);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
};
exports.postAvaliacao = postAvaliacao;
const putAvaliacao = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const avalEmpresa = await aval_empresa_1.default.findByPk(id);
        if (!avalEmpresa) {
            return res.status(404).json({
                msg: 'Não existe'
            });
        }
        await avalEmpresa.update(body);
        res.json(avalEmpresa);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
};
exports.putAvaliacao = putAvaliacao;
const deleteAvaliacao = async (req, res) => {
    const { id } = req.params;
    const avalEmpresa = await aval_empresa_1.default.findByPk(id);
    if (!avalEmpresa) {
        return res.status(404).json({
            msg: 'Não existe.'
        });
    }
    await avalEmpresa.destroy();
    res.json(avalEmpresa);
};
exports.deleteAvaliacao = deleteAvaliacao;
//# sourceMappingURL=aval_empresa.js.map