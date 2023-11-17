import { Lance } from '@prisma/client';
import { Request, Response } from 'express';
import LanceServices from '../services/LanceServices';

class LanceController {
  constructor() {}

  async listarLance(req: Request, res: Response) {
    const result = await LanceServices.listarLance();
    if (result) {
      res.status(200).json({
        status: 'Lance listado com sucesso',
        lance: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async atualizarLance(req: Request, res: Response) {
    const lance: Lance = req.body;
    const result = await LanceServices.atualizarLance(lance);
    if (result) {
      res.status(200).json({
        status: 'Lance atualizado com sucesso',
        lance: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async criarLance(req: Request, res: Response) {
    const newLance: Lance = req.body;
    const result = await LanceServices.criarLance(newLance);
    if (result) {
      res.status(200).json({
        status: 'Lance criado com sucesso',
        lance: result,
      });
    } else {
      res.status(500).json({
        status: 'erro',
      });
    }
  }

  async deletarLance(req: Request, res: Response) {
    const id_lance: string = req.params.id;
    await LanceServices.deletarLance(id_lance);
    try {
      res.status(200).json({
        status: 'Lance deletado com sucesso',
      });
    } catch (error) {
      res.status(500).json({
        status: 'erro',
      });
    }
  }
}

export default new LanceController();
