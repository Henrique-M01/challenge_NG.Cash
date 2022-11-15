import express from 'express';
import errorMIddleware from './middlewares/errorMiddleware';
import router from './routes';

const app = express();

app.use(express.json());
app.use('/', router)

app.use(errorMIddleware);

export default app;