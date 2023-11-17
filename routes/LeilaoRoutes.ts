import { Router } from 'express';
import LeilaoController from '../controllers/LeilaoController';

const LeilaoRouter = Router();

LeilaoRouter.get('/aluno', LeilaoController.listarLeilao);

LeilaoRouter.get('/aluno/:id_aluno', LeilaoController.listarLeilao);

LeilaoRouter.post('/aluno', LeilaoController.criarLeilao);

LeilaoRouter.patch('/aluno/:id_aluno', LeilaoController.atualizarLeilao);

LeilaoRouter.delete('/aluno/:id_aluno', LeilaoController.deletarLeilao);

export default LeilaoRouter;
