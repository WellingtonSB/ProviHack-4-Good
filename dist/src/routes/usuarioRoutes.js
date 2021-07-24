"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarioController_1 = require("../controller/usuarioController");
const router = express_1.Router();
router.get('/', usuarioController_1.getAllUsuarios);
router.get('/buscar/:id', usuarioController_1.getUsuarioById);
router.post('/criar', usuarioController_1.postUsuario);
router.put('/atualizar/:id', usuarioController_1.putUsuario);
router.delete('/deletar/:id', usuarioController_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuarioRoutes.js.map