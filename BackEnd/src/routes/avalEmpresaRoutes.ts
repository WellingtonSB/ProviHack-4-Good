import {Router} from 'express';
import { getAvaliacaoAval,getAvaliacaolById,postAvaliacao,putAvaliacao,deleteAvaliacao} from '../controller/aval_empresa';

const router = Router();

router.get('/',getAvaliacaoAval);
router.get('/buscar/:id',getAvaliacaolById);
router.post('/criar',postAvaliacao);
router.put('/atualizar/:id',putAvaliacao);
router.delete('/deletar/:id',deleteAvaliacao);

export default router;