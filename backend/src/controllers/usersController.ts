import { Response, Request } from 'express';
import UsersService from '../services/usersService';

export default class UsersController {
  constructor(private usersService = new UsersService()) {}

  public async createUser(req: Request, res: Response) {
    const { username, password } = req.body;

    const user = await this.usersService.createUser(username, password);

    if (!user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    return res.status(201).json(user);
  }

  public async userLogin(req: Request, res: Response) {
    const { username, password } = req.body;

    const user = await this.usersService.userLogin(username, password);

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    return res.status(200).json({ message: 'Login successful', token: user[1] });
  }
}