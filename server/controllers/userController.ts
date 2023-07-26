import { Request, Response, NextFunction } from 'express';
import db from '../models/squadGoalsModel.ts';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import dayjs from 'dayjs';

// LOCAL TYPES
type middlewareFunction = (req:Request, res:Response, next: NextFunction) => Promise<void>;

type userControllerType = {
    createUser: middlewareFunction;
}

const userController: userControllerType = {} as userControllerType;

/**
 * CREATES THE USER AFTER SIGNING UP
 */
userController.createUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const hashedPassword = hashSync(password, genSaltSync(10));
    const createdAt = dayjs().format(); 
    const createNewUser = 'INSERT INTO public.user (first_name, last_name, email, password, squad_id, created_at) VALUES ($1, $2, $3, $4, $5, $6)';
    await db.query(createNewUser, [first_name, last_name, email, hashedPassword, 1, createdAt]);
    return next();
  } catch (error){
    return next({
      log: `A user with that email already exists.  ${error}`,
      message: {err: `MIDDLEWARE ERROR - userController.createUser: ${error}`}
    });
  }
};

export default userController;