"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vagaController_1 = require("../controller/vagaController");
const router = express_1.Router();
router.get('/', vagaController_1.getAllVagas);
router.get('/nome/:nome', vagaController_1.getByNome);
router.get('/buscar/:id', vagaController_1.getVagaById);
router.post('/criar', vagaController_1.postVaga);
router.put('/atualizar/:id', vagaController_1.putVaga);
router.delete('/deletar/:id', vagaController_1.deleteVaga);
router.delete('/inativar/:id', vagaController_1.inativarVaga);
exports.default = router;
//# sourceMappingURL=vagaRoutes.js.map