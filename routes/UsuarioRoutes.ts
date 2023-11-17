import { Router } from 'express';
import UsuarioController from '../controllers/UsuarioController';

const UsuarioRouter = Router();

UsuarioRouter.get('/usuario', UsuarioController.listarUsuario);

UsuarioRouter.get('/usuario/:id_usuario', UsuarioController.listarUsuario);

UsuarioRouter.post('/usuario', UsuarioController.criarUsuario);

UsuarioRouter.patch('/usuario/:id_usuario', UsuarioController.atualizarUsuario);

UsuarioRouter.delete('/usuario/:id_usuario', UsuarioController.deletarUsuario);

export default UsuarioRouter;
