import { PrismaClient, Leilao } from '@prisma/client';

const prisma = new PrismaClient();

class LeilaoServices {
  constructor() {}

  async listarLeilao() {
    try {
      const leilao = await prisma.leilao.findMany();
      return leilao;
    } catch (error) {
      console.log(error);
    }
  }

  async criarLeilao(newLeilao: Leilao) {
    try {
      const leilao = await prisma.leilao.create({
        data: newLeilao,
      });
      return leilao;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarLeilao(upLeilao: Leilao) {
    try {
      const { id, ...rest } = upLeilao;
      const leilao = await prisma.leilao.update({
        where: { id: id },
        data: { ...rest },
      });
      return leilao;
    } catch (error) {
      console.log(error);
    }
  }

  async deletarLeilao(id_leilao: string) {
    try {
      await prisma.leilao.delete({
        where: { id: id_leilao },
      });
      return console.log('leilao Deletado');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new LeilaoServices();
