import { JwtPayload } from 'jsonwebtoken'
import { Request } from 'express';

export interface RequestWithToken extends Request {
  tokenData?: data;
}

interface data {
  data: JwtPayload | userInfo;
  iat: number;
  exp: number;
}

export interface userInfo {
  id: number,
  username: string,
  accountId: number,
}