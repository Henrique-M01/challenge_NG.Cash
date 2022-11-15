import { Request, Response, NextFunction } from 'express';
import { userSchema } from '../schemas/userSchema';

async function validateBodyUsers(req: Request, _res: Response, next: NextFunction) {
  try {
    await userSchema.validateAsync(req.body);

    return next();
  } catch (err) {
    return next(err)
  }
}

export default validateBodyUsers;
