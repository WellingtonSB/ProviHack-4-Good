import {Router} from 'express';
import { deleteVaga, getAllVagas, getVagaById, inativarVaga, postVaga, putVaga,getByNome } from '../controller/vagaController';

const router = Router();

router.get('/',getAllVagas);
router.get('/nome/:nome',getByNome)
router.get('/buscar/:id',getVagaById);
router.post('/criar',postVaga);
router.put('/atualizar/:id',putVaga);
router.delete('/deletar/:id',deleteVaga);
router.delete('/inativar/:id',inativarVaga);

export default router;