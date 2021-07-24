import {Router} from 'express';
import { getAllClassificacao,getClassificacaoById,postClassificacao,putClassificacao,deleteClassificacao} from '../controller/classificacaoController';

const router = Router();

router.get('/',getAllClassificacao);
router.get('/buscar/:id',getClassificacaoById);
router.post('/criar',postClassificacao);
router.put('/atualizar/:id',putClassificacao);
router.delete('/deletar/:id',deleteClassificacao);

export default router;