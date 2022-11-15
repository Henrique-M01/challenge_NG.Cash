import {Request, Response, Router} from 'express';
import UsersController from '../controllers/usersController';
import authenticate from '../middlewares/authenticate';
import validateBodyUsers from '../middlewares/validateBodyCreateUser';

const userRouter = Router();

const usersController = new UsersController();

userRouter.post('/register',
  validateBodyUsers,
(req: Request, res: Response) => usersController.createUser(req, res),
);

userRouter.post('/login',
  validateBodyUsers,
  (req: Request, res: Response) => usersController.userLogin(req, res),
);

userRouter.get('/me',
  authenticate,
  (req: Request, res: Response) => usersController.getUserById(req, res),
)

userRouter.get('/transactions',
  authenticate,
  (req: Request, res: Response) => usersController.getUserTransactions(req, res),
)

export default userRouter;
