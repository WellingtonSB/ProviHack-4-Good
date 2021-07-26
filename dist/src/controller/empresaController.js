"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmpressa = exports.putEmpressa = exports.postEmpressa = exports.getEmpressaById = exports.getAllEmpressas = void 0;
const empresa_1 = __importDefault(require("../models/empresa"));
const getAllEmpressas = async (req, res) => {
    const empressa = await empresa_1.default.findAll();
    res.json(empressa);
};
exports.getAllEmpressas = getAllEmpressas;
const getEmpressaById = async (req, res) => {
    const { id } = req.params;
    const empressa = await empresa_1.default.findByPk(id);
    if (empressa) {
        res.json(empressa);
    }
    else {
        res.status(404).json({
            msg: `{id} não existe no banco de dados`
        });
    }
};
exports.getEmpressaById = getEmpressaById;
const postEmpressa = async (req, res) => {
    const { body } = req;
    try {
        const existeEmail = await empresa_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: 'Email existente: ' + body.email
            });
        }
        const empressa = await empresa_1.default.create(body);
        await empressa.save();
        res.json(empressa);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
};
exports.postEmpressa = postEmpressa;
const putEmpressa = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const empressa = await empresa_1.default.findByPk(id);
        if (!empressa) {
            return res.status(404).json({
                msg: 'empressa nao existe'
            });
        }
        await empressa.update(body);
        res.json(empressa);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
};
exports.putEmpressa = putEmpressa;
const deleteEmpressa = async (req, res) => {
    const { id } = req.params;
    const empressa = await empresa_1.default.findByPk(id);
    if (!empressa) {
        return res.status(404).json({
            msg: 'Não existe.'
        });
    }
    await empressa.destroy();
    res.json(empressa);
};
exports.deleteEmpressa = deleteEmpressa;
//# sourceMappingURL=empresaController.js.map