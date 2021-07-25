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
exports.deleteAvaliacao = exports.putAvaliacao = exports.postAvaliacao = exports.getAvaliacaolById = exports.getAvaliacaoAval = void 0;
const aval_empresa_1 = __importDefault(require("../models/aval_empresa"));
const getAvaliacaoAval = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const avalEmpresa = yield aval_empresa_1.default.findAll();
    res.json(avalEmpresa);
});
exports.getAvaliacaoAval = getAvaliacaoAval;
const getAvaliacaolById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const avalEmpresa = yield aval_empresa_1.default.findByPk(id);
    if (avalEmpresa) {
        res.json(avalEmpresa);
    }
    else {
        res.status(404).json({
            msg: `{id} não existe no banco de dados`
        });
    }
});
exports.getAvaliacaolById = getAvaliacaolById;
const postAvaliacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const avalEmpresa = yield aval_empresa_1.default.create(body);
        yield avalEmpresa.save();
        res.json(avalEmpresa);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
});
exports.postAvaliacao = postAvaliacao;
const putAvaliacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const avalEmpresa = yield aval_empresa_1.default.findByPk(id);
        if (!avalEmpresa) {
            return res.status(404).json({
                msg: 'Não existe'
            });
        }
        yield avalEmpresa.update(body);
        res.json(avalEmpresa);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
});
exports.putAvaliacao = putAvaliacao;
const deleteAvaliacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const avalEmpresa = yield aval_empresa_1.default.findByPk(id);
    if (!avalEmpresa) {
        return res.status(404).json({
            msg: 'Não existe.'
        });
    }
    yield avalEmpresa.destroy();
    res.json(avalEmpresa);
});
exports.deleteAvaliacao = deleteAvaliacao;
//# sourceMappingURL=aval_empresa.js.map