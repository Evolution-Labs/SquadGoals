import { Request, Response, NextFunction } from 'express';
import db from '../models/squadGoalsModel.js';
import { compareSync } from 'bcrypt-ts';
import jwt from 'jsonwebtoken';

type authControllerType = {
    authenticateUser: (req:Request, res:Response, next: NextFunction) => Promise<void>
    authorizeUser: (req:Request, res:Response, next: NextFunction) => Promise<void>
    verifyToken: (req:Request, res:Response, next: NextFunction) => Promise<void>
}


const authController= {} as authControllerType;

// authenticate the user

authController.authenticateUser = async (req, res, next) => {
  try {
    // check with frontend on how they are passing in the data into the req.body
    const { email, password } = req.body;
    const userQuery = 'SELECT * FROM public.user WHERE public.user.email = $1';
    const data = await db.query(userQuery, [email]);
    console.log("data: ", data);
    const user = data.rows[0];
    const verifyPassword = compareSync(password, user.password); // --> true/false
    if (verifyPassword){
      return next();
    } else {
      return next({
        log: 'Incorrect password',
        message: {err: `An error occured in authController.authenticateUser middleware: Incorrect password`}
      });
    }
  } catch (error){
    return next({
        log: 'Unable to authenticate user',
        message: {err: `An error occured in authController.authenticateUser middleware: ${error}`}
    })
  }
}

// authorize user to user our endpoints

authController.authorizeUser = async (req, res, next) => {
    try {
      const { email } = req.body;
      const secret = process.env.ACCESS_TOKEN_SECRET as string;
      const token = jwt.sign({ 'email': email }, secret, { expiresIn: '30000' }); // update expire time 
      res.locals.token = token;
      return next();
    }
    catch(error) {
        return next({
            log: 'Unable to authorize user',
            message: {err: `An error occured in authController.authorizeUser middleware: ${error}`}
        })
    }
}

authController.verifyToken = async (req, res, next) => {
try{
  const authHeader = req.headers.authorization;
  if (authHeader){
    const secret = process.env.ACCESS_TOKEN_SECRET as string;
    jwt.verify(authHeader.split(' ')[1], secret);
    return next();
  } else {
    return next({
        log: 'Not authorization credentials provided',
        message: {err: `An error occured in authController.verifyToken middleware: Not authorization credentials provided`}
    })
  }
} catch(error) {
    return next({
        log: 'Unable to verify token',
        message: {err: `An error occured in authController.verifyToken middleware: ${error}`}
    })
}
}

export default authController;