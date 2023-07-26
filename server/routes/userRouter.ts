import express, { Request, Response } from 'express';
import userController from '../controllers/userController.ts';
import authController from '../controllers/authController.ts';


const userRouter = express.Router();
/**
 * HANDLES SIGNING UP A USER
 */
userRouter.post(
  '/signup', 
  userController.createUser,
  (req: Request, res: Response) => {
    // check with front-end on how they'd like the response here
    res.send('User Created Successfully');
  }
);
/**
 * HANDLES LOGGING IN A USER
 */
userRouter.post(
  '/login',
  authController.authenticateUser,
  authController.authorizeUser,
  (req: Request, res: Response) => {
    // check with front-end on how they'd like the response here
    res.status(200).json(res.locals.userInfo);
  }
);

export default userRouter;