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
exports.deleteEmpressa = exports.putEmpressa = exports.postEmpressa = exports.getEmpressaById = exports.getAllEmpressas = void 0;
const empressa_1 = __importDefault(require("../models/empressa"));
const getAllEmpressas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empressa = yield empressa_1.default.findAll();
    res.json(empressa);
});
exports.getAllEmpressas = getAllEmpressas;
const getEmpressaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const empressa = yield empressa_1.default.findByPk(id);
    if (empressa) {
        res.json(empressa);
    }
    else {
        res.status(404).json({
            msg: `{id} não existe no banco de dados`
        });
    }
});
exports.getEmpressaById = getEmpressaById;
const postEmpressa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeEmail = yield empressa_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: 'Email existente: ' + body.email
            });
        }
        const empressa = yield empressa_1.default.create(body);
        yield empressa.save();
        res.json(empressa);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
});
exports.postEmpressa = postEmpressa;
const putEmpressa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const empressa = yield empressa_1.default.findByPk(id);
        if (!empressa) {
            return res.status(404).json({
                msg: 'empressa nao existe'
            });
        }
        yield empressa.update(body);
        res.json(empressa);
    }
    catch (error) {
        res.status(500).json({
            msg: 'Verificar campos'
        });
    }
});
exports.putEmpressa = putEmpressa;
const deleteEmpressa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const empressa = yield empressa_1.default.findByPk(id);
    if (!empressa) {
        return res.status(404).json({
            msg: 'Não existe.'
        });
    }
    yield empressa.destroy();
    res.json(empressa);
});
exports.deleteEmpressa = deleteEmpressa;
//# sourceMappingURL=empresaController.js.map