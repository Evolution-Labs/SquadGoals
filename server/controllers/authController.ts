import { Request, Response, NextFunction } from 'express';
import db from '../models/squadGoalsModel.js';
import { compareSync } from 'bcrypt-ts'
import jwt from 'jsonwebtoken';

// LOCAL TYPES
type middlewareFunction = (req:Request, res:Response, next: NextFunction) => Promise<void>;

type authControllerType = {
    authenticateUser: middlewareFunction;
    authorizeUser: middlewareFunction;
    verifyToken: middlewareFunction;
}

const authController: authControllerType= {} as authControllerType;

/**
 * AUTHENTICATES USER WITH EMAIL/PASSWORD INFO.
 */
authController.authenticateUser = async (req, res, next) => {
  try {
    // check with frontend on how they are passing in the data into the req.body
    const { email, password } = req.body;
    const userQuery = 'SELECT * FROM public.user WHERE public.user.email = $1';
    const data = await db.query(userQuery, [email]);
    const user = data.rows[0];
    const verifyPassword = compareSync(password, user.password); // --> true/false
    if (verifyPassword){
      return next();
    } else {
      return next({
        log: 'Incorrect password',
        message: {err: `MIDDLEWARE ERROR - authController.authenticateUser: Incorrect password`}
      });
    }
  } catch (error){
    return next({
        log: 'Unable to authenticate user',
        message: {err: `MIDDLEWARE ERROR - authController.authenticateUser: ${error}`}
    });
  }
};

/**
 * AUTHORIZES USER WITH PROPER ACCESS TOKEN.
 */
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
            message: {err: `MIDDLEWARE ERROR - authController.authorizeUser: ${error}`}
        });
    }
};

/**
 * AUTHENTICATES USER WITH THE PROPER ACCESS TOKEN.
 */
authController.verifyToken = async (req, res, next) => {
try{
  const authHeader = req.headers['Authorization'] as string;
  if (authHeader){
    const secret = process.env.ACCESS_TOKEN_SECRET as string;
    jwt.verify(authHeader.split(' ')[1], secret); // --> { "Authorization": "Bearer TOKEN" }
    return next();
  } else {
    return next({
        log: 'Not authorization credentials provided',
        message: {err: `MIDDLEWARE ERROR - authController.verifyToken: Not authorization credentials provided`}
    });
  }
} catch(error) {
    return next({
        log: 'Unable to verify token',
        message: {err: `MIDDLEWARE ERROR - authController.verifyToken: ${error}`}
    });
}
};

export default authController;