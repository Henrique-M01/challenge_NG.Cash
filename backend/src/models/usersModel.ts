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
      create: { 
        username: userName,
        password: hashedPassword,
        account: {
          create: {
            balance: '100',
          }
        }
      },
      select: { id: true, username: true, accountId: true },
    });

    return user;
  }

  private async hashPassword(password: string) {
    return md5(password);
  }
}