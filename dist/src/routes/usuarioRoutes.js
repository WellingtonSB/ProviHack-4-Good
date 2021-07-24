"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controller/authController");
const router = express_1.Router();
router.get('/', authController_1.getAllUsuarios);
router.get('/buscar/:id', authController_1.getUsuarioById);
router.post('/criar', authController_1.postUsuario);
router.put('/atualizar/:id', authController_1.putUsuario);
router.delete('/deletar/:id', authController_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuarioRoutes.js.map