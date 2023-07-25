import { Request, Response, NextFunction } from 'express';
import db from '../models/squadGoalsModel.js';
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
    // check with frontend on how they are passing in the data into the req.body
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = hashSync(password, genSaltSync(10));
    const createdAt = dayjs().format(); 
  
    const createNewUser = 'INSERT INTO public.user (first_name, last_name, email, password, created_at) VALUES($1, $2, $3, $4, $5)'
    await db.query(createNewUser, [firstName, lastName, email, hashedPassword, createdAt]);

    return next();
  } catch (error){
    return next({
        log: `A user with that email already exists.`,
        message: {err: `MIDDLEWARE ERROR - userController.createUser: ${error}`}
    });
  }
};

export default userController;