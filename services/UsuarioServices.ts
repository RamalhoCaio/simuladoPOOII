import { PrismaClient, Usuario } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioServices {
  constructor() {}

  async listarUsuario() {
    try {
      const usuario = await prisma.usuario.findMany();
      return usuario;
    } catch (error) {
      console.log(error);
    }
  }

  async criarUsuario(newUsuario: Usuario) {
    try {
      const usuario = await prisma.usuario.create({
        data: newUsuario,
      });
      return usuario;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarUsuario(upUsuario: Usuario) {
    try {
      const { id, ...rest } = upUsuario;
      const usuario = await prisma.usuario.update({
        where: { id: id },
        data: { ...rest },
      });
      return usuario;
    } catch (error) {
      console.log(error);
    }
  }

  async deletarUsuario(id_usuario: string) {
    try {
      await prisma.usuario.delete({
        where: { id: id_usuario },
      });
      return console.log('Usuario Deletado');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UsuarioServices();
