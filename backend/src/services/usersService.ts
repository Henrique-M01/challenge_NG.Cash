import jwtGenerator from '../helpers/jwtGenerator';
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

  public async userLogin(userName: string, password: string) {
    const user = await this.usersModel.userLogin(userName, password);

    if (!user) {
      return null;
    }

    const token = jwtGenerator({ id: user?.id, username: user?.username, accountId: user?.accountId });

    return [user, token];
  }
}