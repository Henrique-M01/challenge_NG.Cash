import { Response, Request } from 'express';
import { RequestWithToken } from '../interfaces/requestWithToken';
import UsersService from '../services/usersService';

export default class UsersController {
  constructor(private usersService = new UsersService()) {}

  public async getUserById(req: RequestWithToken, res: Response) {
    const token = req.tokenData;

    const user = await this.usersService.getUserById(Number(token?.data.id));

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
  }

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