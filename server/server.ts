import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRouter.ts';
// import apiRouter from './routes/apiRouter';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

type MessageType = {
  err?: string
}

type ErrorType = {
  log?: string,
  message?: MessageType,
}

const app: Express = express();
const { PORT } = process.env;

app.use(express.json());

app.use(cookieParser())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../dist" ))); 

app.use('/user', userRouter);

// app.use('/api', apiRouter);

// route for tasks

// route for squads

// 404 error handler
app.use('*', (req: Request,res: Response) => {
  res.status(404).send('404 page not found');
})

// global error handler
/* eslint-disable */
app.use((error:ErrorType, req:Request, res:Response, next:NextFunction) => { 
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: {err: 'An error occured'},
  };
  const errObj = Object.assign({}, defaultErr, error);
  console.log("errorObj.log: ", errObj.log);
  res.status(errObj.status).json(errObj.message)
})


app.listen(PORT, () => {
  console.log(`[server]: Server is listening on PORT:${PORT}`);
});
