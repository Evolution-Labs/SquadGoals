import express, { Express, Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import userRouter from './routes/userRouter.ts';
// import apiRouter from './routes/apiRouter';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// LOCAL TYPES
type MessageType = {
  err?: string
}

type ErrorType = {
  log?: string,
  message?: MessageType,
}

dotenv.config();

// __DIRNAME WORKAROUND FOR ES MODULES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.join(__filename);

const app: Express = express();

/**
 * PARSE INCOMING JSON
 */
app.use(express.json());

/**
 * PARSE INCOMING COOKIES
 */
app.use(cookieParser())

/**
 * SERVE STATIC FILES
 */
app.use(express.static(path.join(__dirname, "../dist" ))); 

/**
 * ROUTE HANDLER FOR USER RELATED OPERATIONS, SUCH AS CREATION, AUTHENTICATION, AUTHORIZATION
 */
app.use('/user', userRouter);

/**
 * ROUTE HANDLER FOR API REQUESTS
 */
// app.use('/api', apiRouter);

// route for tasks

// route for squads

/**
 * 404 ERROR HANDLER
 */
app.use('*', (req: Request,res: Response) => {
  res.status(404).send('404 page not found');
})

/* eslint-disable */
/**
 * GLOBAL ERROR HANDLER
 */
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

/**
 * CONNECTS TO SERVER
 */
app.listen(process.env.PORT, () => {
  console.log(`[server]: Server is listening on PORT:${process.env.PORT}`);
});
