import connection from '../models/Connection';
import TransactionModel from '../models/transactionModel';

export default class TransactionServices {
  public transactionModel: TransactionModel;

  constructor() {
    this.transactionModel = new TransactionModel(connection);
  }

  public async cashInAndCashOut(cashOutId: number, cashInId: number, amount: number) {
    const transaction = await this.transactionModel.cashInAndCashOut(cashOutId, cashInId, amount);

    if (transaction === false) return false;

    return transaction;
  }

  public async getUserTransactionsCashIn(id: number) {
    const transactions = await this.transactionModel.getUserTransactionsCashIn(id);

    return transactions;
  }
}