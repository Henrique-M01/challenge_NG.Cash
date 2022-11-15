import {Request, Response, Router} from 'express';
import UsersController from '../controllers/usersController';
import validateBodyUsers from '../middlewares/validateBodyCreateUser';

const userRouter = Router();

const usersController = new UsersController();

userRouter.post('/register',
  validateBodyUsers,
(req: Request, res: Response) => usersController.createUser(req, res),
);

export default userRouter;
