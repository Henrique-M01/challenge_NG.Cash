import {Request, Response, Router} from 'express';
import authenticate from '../middlewares/authenticate';
import TransactionController from '../controllers/transactionController';
import validateBodyTransactions from '../middlewares/validateBodyTransactions';

const transactionRouter = Router();

const transactionController = new TransactionController();

transactionRouter.put('/',
[authenticate, validateBodyTransactions],
  (req: Request, res: Response) =>  transactionController.cashInAndCashOut(req, res));

transactionRouter.get('/in',
authenticate,
  (req: Request, res: Response) =>  transactionController.getUserTransactionsCashIn(req, res));

transactionRouter.get('/out',
authenticate,
  (req: Request, res: Response) =>  transactionController.getUserTransactionsCashOut(req, res));

export default transactionRouter;
