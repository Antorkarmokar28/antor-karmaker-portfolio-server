import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
import cookieParser from 'cookie-parser';
import router from './app/router';
app.use(express.json());
app.use(cookieParser())
app.use(cors());

// hit the application route
app.use('/api/v1', router);

const testServer = async (req: Request, res: Response) => {
  res.send({
    success: true,
    message: 'Antor Karmaker Portfolio Server is runnig...',
  });
};

app.get('/', testServer);

export default app;
