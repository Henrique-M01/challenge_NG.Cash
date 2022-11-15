import connection from '../models/Connection';
import UsersModel from '../models/usersModel';

export default class UsersService {
  public usersModel: UsersModel;

  constructor() {
    this.usersModel = new UsersModel(connection);
  }

  public async createUser(userName: string, password: string) {
    const user = await this.usersModel.createUser(userName, password);

    return user;
  }
}