import {Router} from 'express';
import { deleteUsuario, getAllUsuarios, getUsuarioById, postUsuario, putUsuario } from '../controller/usuarioController';

const router = Router();

router.get('/',getAllUsuarios);
router.get('/buscar/:id',getUsuarioById);
router.post('/criar',postUsuario);
router.put('/atualizar/:id',putUsuario);
router.delete('/deletar/:id',deleteUsuario);

export default router;