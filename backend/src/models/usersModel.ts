import { PrismaClient } from '@prisma/client';
import md5 from 'md5';

export default class UsersModel {
  public connection: PrismaClient;

  constructor(connection: PrismaClient) {
    this.connection = connection;
  }

  public async createUser(userName: string, password: string) {
    const hashedPassword = await this.hashPassword(password);

    const user = await this.connection.users.upsert({
      where: { username: userName },
      update: {},
      create: { username: userName, password: hashedPassword },
    });

    // se criar o user com sucesso, criar a conta tambem, se nao, retornar o erro.

    return user;
  }

  private async hashPassword(password: string) {
    return md5(password);
  }
}