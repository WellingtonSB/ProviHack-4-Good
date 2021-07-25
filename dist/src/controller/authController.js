"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inativaUsuario = exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuarioById = exports.getAllUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getAllUsuarios = async (req, res) => {
    const usuario = await usuario_1.default.findAll();
    res.json(usuario);
};
exports.getAllUsuarios = getAllUsuarios;
const getUsuarioById = async (req, res) => {
    const { id } = req.params;
    const usuario = await usuario_1.default.findByPk(id);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: `{id} não existe no banco de dados`
        });
    }
};
exports.getUsuarioById = getUsuarioById;
const postUsuario = async (req, res) => {
    const { body } = req;
    try {
        const existeEmail = await usuario_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: 'Email existente: ' + body.email
            });
        }
        const usuario = await usuario_1.default.create(body);
        await usuario.save();
        res.json(usuario);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
};
exports.postUsuario = postUsuario;
const putUsuario = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = await usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'Usuario nao existe'
            });
        }
        await usuario.update(body);
        res.json(usuario);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
};
exports.putUsuario = putUsuario;
const deleteUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = await usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: 'Usuario nao existe'
        });
    }
    await usuario.destroy();
    res.json(usuario);
};
exports.deleteUsuario = deleteUsuario;
const inativaUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = await usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: 'Usuario nao existe'
        });
    }
    await usuario.update({ status: false });
    res.json(usuario);
};
exports.inativaUsuario = inativaUsuario;
//# sourceMappingURL=authController.js.map