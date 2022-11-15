import { Request, Response, NextFunction } from 'express';
import { transactionSchema } from '../schemas/transactionSchema';

async function validateBodyTransactions(req: Request, _res: Response, next: NextFunction) {
  try {
    await transactionSchema.validateAsync(req.body);

    return next();
  } catch (err) {
    return next(err)
  }
}

export default validateBodyTransactions;
