"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const aval_empresa_1 = require("../controller/aval_empresa");
const router = express_1.Router();
router.get('/', aval_empresa_1.getAvaliacaoAval);
router.get('/buscar/:id', aval_empresa_1.getAvaliacaolById);
router.post('/criar', aval_empresa_1.postAvaliacao);
router.put('/atualizar/:id', aval_empresa_1.putAvaliacao);
router.delete('/deletar/:id', aval_empresa_1.deleteAvaliacao);
exports.default = router;
//# sourceMappingURL=avalEmpresaRoutes.js.map