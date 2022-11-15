import { Router } from 'express';
import transactionRouter from './transactionRoute';
import userRouter from './usersRoute';

const router = Router();

router.use('/users', userRouter);
router.use('/transactions', transactionRouter);

export default router;
