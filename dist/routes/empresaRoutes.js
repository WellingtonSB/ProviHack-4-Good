"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresaController_1 = require("../controller/empresaController");
const router = express_1.Router();
router.get('/', empresaController_1.getAllEmpressas);
router.get('/buscar/:id', empresaController_1.getEmpressaById);
router.post('/criar', empresaController_1.postEmpressa);
router.put('/atualizar/:id', empresaController_1.putEmpressa);
router.delete('/deletar/:id', empresaController_1.deleteEmpressa);
exports.default = router;
//# sourceMappingURL=empresaRoutes.js.map