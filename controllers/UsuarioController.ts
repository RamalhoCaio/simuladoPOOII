import { Usuario } from '@prisma/client';
import { Request, Response } from 'express';
import UsuarioServices from '../services/UsuarioServices';

class UsuarioController {
  constructor() {}

  async listarUsuario(req: Request, res: Response) {
    const result = await UsuarioServices.listarUsuario();
    if (result) {
      res.status(200).json({
        status: 'Usuario listado com sucesso',
        usuario: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async atualizarUsuario(req: Request, res: Response) {
    const usuario: Usuario = req.body;
    const result = await UsuarioServices.atualizarUsuario(usuario);
    if (result) {
      res.status(200).json({
        status: 'Usuario atualizado com sucesso',
        usuario: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async criarUsuario(req: Request, res: Response) {
    const newUsuario: Usuario = req.body;
    const result = await UsuarioServices.criarUsuario(newUsuario);
    if (result) {
      res.status(200).json({
        status: 'Usuario criado com sucesso',
        usuario: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async deletarUsuario(req: Request, res: Response) {
    const id_usuario: string = req.params.id;
    await UsuarioServices.deletarUsuario(id_usuario);
    try {
      res.status(200).json({
        status: 'Usuario deletado com sucesso',
      });
    } catch (error) {
      res.status(500).json({
        status: 'erro',
      });
    }
  }
}

export default new UsuarioController();