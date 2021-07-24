import {Router} from 'express';
import {getAllEmpressas, getEmpressaById,postEmpressa,putEmpressa,deleteEmpressa} from '../controller/empresaController';

const router = Router();

router.get('/',getAllEmpressas);
router.get('/buscar/:id',getEmpressaById);
router.post('/criar',postEmpressa);
router.put('/atualizar/:id',putEmpressa);
router.delete('/deletar/:id',deleteEmpressa);

export default router;