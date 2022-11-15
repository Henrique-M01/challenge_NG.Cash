import { PrismaClient } from '@prisma/client';
import md5 from 'md5';

export default class UsersModel {
  public connection: PrismaClient;

  constructor(connection: PrismaClient) {
    this.connection = connection;
  }

  public async getUserById(id: number) {
    const user = await this.connection.users.findUnique({
      where: { id },
      include: { account: true },
    });


    return {
      id: user?.id,
      username: user?.username,
      accountId: user?.accountId,
      account: user?.account,
    };
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
            balance: 100,
          }
        }
      },
      select: { id: true, username: true, accountId: true },
    });

    return user;
  }

  public async userLogin(userName: string, password: string) {
    const hashedPassword = await this.hashPassword(password);

    const user = await this.connection.users.findFirst({
      where: { username: userName, password: hashedPassword },
      select: { id: true, username: true, accountId: true },
    });

    return user;
  }

  public async getUserTransactions(id: number) {
    const transactions = await this.connection.transactions.findMany({
      where: { debitedAccountId: id, creditedAccountId: id },
      orderBy: { createdAt: 'desc' },
    });

    return transactions;
  }

  private async hashPassword(password: string) {
    return md5(password);
  }
}