import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import fs from 'fs';

export default function authenticate(req: any, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const SECRET = fs.readFileSync('./jwt.secret.key', { encoding: 'utf-8' });

  try {
    const decoded = jwt.verify(authorization, SECRET);

    req.tokenData = decoded;

    next();
  } catch (err) {
    next(err);
  }
}
