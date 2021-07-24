"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const classificacaoController_1 = require("../controller/classificacaoController");
const router = express_1.Router();
router.get('/', classificacaoController_1.getAllClassificacao);
router.get('/buscar/:id', classificacaoController_1.getClassificacaoById);
router.post('/criar', classificacaoController_1.postClassificacao);
router.put('/atualizar/:id', classificacaoController_1.putClassificacao);
router.delete('/deletar/:id', classificacaoController_1.deleteClassificacao);
exports.default = router;
//# sourceMappingURL=classificacaoRoutes.js.map