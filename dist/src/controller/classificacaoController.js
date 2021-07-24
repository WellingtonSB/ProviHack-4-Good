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
exports.deleteClassificacao = exports.putClassificacao = exports.postClassificacao = exports.getClassificacaoById = exports.getAllClassificacao = void 0;
const classificacao_1 = __importDefault(require("../models/classificacao"));
const getAllClassificacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const classificacao = yield classificacao_1.default.findAll();
    res.json(classificacao);
});
exports.getAllClassificacao = getAllClassificacao;
const getClassificacaoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const classificacao = yield classificacao_1.default.findByPk(id);
    if (classificacao) {
        res.json(classificacao);
    }
    else {
        res.status(404).json({
            msg: `{id} não existe no banco de dados`
        });
    }
});
exports.getClassificacaoById = getClassificacaoById;
const postClassificacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const classificacao = yield classificacao_1.default.create(body);
        yield classificacao.save();
        res.json(classificacao);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
});
exports.postClassificacao = postClassificacao;
const putClassificacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const classificacao = yield classificacao_1.default.findByPk(id);
        if (!classificacao) {
            return res.status(404).json({
                msg: 'Não existe'
            });
        }
        yield classificacao.update(body);
        res.json(classificacao);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
});
exports.putClassificacao = putClassificacao;
const deleteClassificacao = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const classificacao = yield classificacao_1.default.findByPk(id);
    if (!classificacao) {
        return res.status(404).json({
            msg: 'Não existe.'
        });
    }
    yield classificacao.destroy();
    res.json(classificacao);
});
exports.deleteClassificacao = deleteClassificacao;
//# sourceMappingURL=classificacaoController.js.map