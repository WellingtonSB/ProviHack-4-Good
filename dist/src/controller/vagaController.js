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
exports.inativarVaga = exports.deleteVaga = exports.putVaga = exports.postVaga = exports.getVagaById = exports.getByNome = exports.getAllVagas = void 0;
const vaga_1 = __importDefault(require("../models/vaga"));
const getAllVagas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const vaga = yield vaga_1.default.findAll();
    res.json(vaga);
});
exports.getAllVagas = getAllVagas;
const getByNome = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nome } = req.params;
    try {
        /*      const vagaNome = await Vaga.findOne({
               where: {
                   nome
               }
       
           });
            const vagaNome = await Vaga.findAll({
               where: Sequelize.and(
                 { nome }
               )
             }); */
        const vagaNome = yield vaga_1.default.findAll({
            where: {
                nome
            }
        });
        if (!vagaNome) {
            return res.status(400).json({
                msg: 'vaga não cadastrada: ' + nome
            });
        }
        res.json(vagaNome);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getByNome = getByNome;
const getVagaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const vaga = yield vaga_1.default.findByPk(id);
    if (vaga) {
        res.json(vaga);
    }
    else {
        res.status(404).json({
            msg: `{id} não existe no banco de dados`
        });
    }
});
exports.getVagaById = getVagaById;
const postVaga = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeVaga = yield vaga_1.default.findOne({
            where: {
                nome: body.nome
            }
        });
        if (existeVaga) {
            return res.status(400).json({
                msg: 'Email existente: ' + body.nome
            });
        }
        const vaga = yield vaga_1.default.create(body);
        yield vaga.save();
        res.json(vaga);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
});
exports.postVaga = postVaga;
const putVaga = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const vaga = yield vaga_1.default.findByPk(id);
        if (!vaga) {
            return res.status(404).json({
                msg: 'vaga nao existe'
            });
        }
        yield vaga.update(body);
        res.json(vaga);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
});
exports.putVaga = putVaga;
const deleteVaga = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const vaga = yield vaga_1.default.findByPk(id);
    if (!vaga) {
        return res.status(404).json({
            msg: 'A vaga nao existe'
        });
    }
    yield vaga.destroy();
    res.json(vaga);
});
exports.deleteVaga = deleteVaga;
//classe nao instanciada
const inativarVaga = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const vaga = yield vaga_1.default.findByPk(id);
    if (!vaga) {
        return res.status(404).json({
            msg: 'A vaga nao existe'
        });
    }
    yield vaga.update({ status: false });
    res.json(vaga);
});
exports.inativarVaga = inativarVaga;
//# sourceMappingURL=vagaController.js.map