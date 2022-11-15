import { Response, Request } from 'express';
import { RequestWithToken } from '../interfaces/requestWithToken';
import TransactionService from '../services/transactionService';

export default class TransactionController {
  constructor(private transactionService = new TransactionService()) {}

  public async cashInAndCashOut(req: RequestWithToken, res: Response) {
    const { cashInAccId, amount } = req.body;
    const token = req.tokenData?.data;

    if (token?.accountId === Number(cashInAccId)) {
      return res.status(400).json({ message: 'You cannot transfer money to your own account' });
    }

    const transaction = await this.transactionService
      .cashInAndCashOut( token?.accountId, cashInAccId, amount);

    if (transaction === false) {
      return res.status(400).json({ message: 'Transaction failed' });
    }

    return res.status(200).json({ message: 'Transaction successful', transaction });
  }

  public async getUserTransactionsCashIn(req: RequestWithToken, res: Response) {
    const token = req.tokenData?.data;

    const transactions = await this.transactionService.getUserTransactionsCashIn(token?.accountId);

    return res.status(200).json({ transactions });
  }

  public async getUserTransactionsCashOut(req: RequestWithToken, res: Response) {
    const token = req.tokenData?.data;

    const transactions = await this.transactionService.getUserTransactionsCashOut(token?.accountId);

    return res.status(200).json({ transactions });
  }
}
