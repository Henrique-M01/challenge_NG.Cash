import * as jwt from 'jsonwebtoken';
import fs from 'fs';

const JWT_CONFIG = {
  expiresIn: '1d',
};

const SECRET = fs.readFileSync('./jwt.secret.key', { encoding: 'utf-8' });

export default function jwtGenerator(payload = {}): string {
  const token = jwt.sign({ data: payload }, SECRET, JWT_CONFIG);

  return token;
}