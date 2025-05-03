import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
import cookieParser from 'cookie-parser';
import router from './app/router';
import globalErrorHandeling from './app/middlewares/globalErrorHandeling';
import notFound from './app/middlewares/notFound';
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

// global error handeler
app.use(globalErrorHandeling);
// not found router handeler
app.use(notFound);

export default app;
