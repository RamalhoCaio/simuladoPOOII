import { Router } from 'express';
import LanceController from '../controllers/LanceController';

const LanceRouter = Router();

LanceRouter.get('/lance', LanceController.listarLance);

LanceRouter.get('/lance/:id_lance', LanceController.listarLance);

LanceRouter.post('/lance', LanceController.criarLance);

LanceRouter.patch('/lance/:id_lance', LanceController.atualizarLance);

LanceRouter.delete('/lance/:id_lance', LanceController.deletarLance);

export default LanceRouter;
