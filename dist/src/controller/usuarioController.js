"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inativaUsuario = exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuarioById = exports.getAllUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getAllUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuario_1.default.findAll();
    res.json(usuario);
});
exports.getAllUsuarios = getAllUsuarios;
const getUsuarioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: `{id} não existe no banco de dados`
        });
    }
});
exports.getUsuarioById = getUsuarioById;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield usuario_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: 'Email existente: ' + body.email
            });
        }
        /*   const usuario = new Usuario(body);
          await usuario.save();
          res.json(usuario); */
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'Usuario nao existe'
            });
        }
        yield usuario.update(body);
        res.json(usuario);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: 'Usuario nao existe'
        });
    }
    yield usuario.destroy();
    res.json(usuario);
});
exports.deleteUsuario = deleteUsuario;
//classe nao instanciada
const inativaUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: 'Usuario nao existe'
        });
    }
    //status
    yield usuario.update({ status: false });
    res.json(usuario);
});
exports.inativaUsuario = inativaUsuario;
//# sourceMappingURL=usuarioController.js.map