import { PrismaClient } from '@prisma/client';

export default class TransactionModel {
  public connection: PrismaClient;

  constructor(connection: PrismaClient) {
    this.connection = connection;
  }

  public async cashInAndCashOut(cashOutId: number, cashInId: number, amount: number) {
    const balance = await this.verifyBalance(Number(cashOutId), amount);

    if (!balance) return false;

    const cashOutAcc = await this.connection.accounts.updateMany({
      where: { id: Number(cashOutId) },
      data: { balance: { decrement: amount } },
    })

    if (!cashOutAcc) return false;

    const cashInAcc = await this.connection.accounts.updateMany({
      where: { id: Number(cashInId) },
      data: { balance: { increment: amount } },
    })

    if (!cashInAcc) return false;

    const newTransaction = await this.connection.transactions.create({
      data: {
        debitedAccountId: Number(cashOutId),
        creditedAccountId: Number(cashInId),
        value: amount,
      }
    })

  }

  public async verifyBalance(accountId: number, amount: number) {
    const account = await this.connection.accounts.findUnique({
      where: { id: accountId },
    });

    if (Number(account?.balance) < amount) {
      return false;
    }

    return true;
  }

}