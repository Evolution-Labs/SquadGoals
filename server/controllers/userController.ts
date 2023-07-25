import { Request, Response, NextFunction } from 'express';
import db from '../models/squadGoalsModel.js';
import { genSaltSync, hashSync } from 'bcrypt-ts';
import dayjs from 'dayjs';

const SALT_WORK_FACTOR = genSaltSync(10);

type userControllerType = {
    createUser: (req:Request, res:Response, next: NextFunction) => Promise<void>
}
const userController = {} as userControllerType;

// userController.createUser --> Hashes password, writes user into tables
userController.createUser = async (req, res, next) => {
  try {
    // check with frontend on how they are passing in the data into the req.body
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = hashSync(password, SALT_WORK_FACTOR);
    const createdAt = dayjs().format(); 
  
    const createNewUser = 'INSERT INTO public.user (first_name, last_name, email, password, created_at) VALUES($1, $2, $3, $4, $5)'
    await db.query(createNewUser, [firstName, lastName, email, hashedPassword, createdAt]);

    return next();
  } catch (error){
    return next({
        log: `A user with that email already exists.`,
        message: {err: `An error occured in userController.createUser middleware: ${error}`}
    });
  }
};

export default userController;