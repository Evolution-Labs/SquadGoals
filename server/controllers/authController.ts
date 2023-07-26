import { Request, Response, NextFunction } from 'express';
import db from '../models/squadGoalsModel.ts';
import { compareSync } from 'bcrypt-ts';
import jwt from 'jsonwebtoken';

// LOCAL TYPES
type middlewareFunction = (req:Request, res:Response, next: NextFunction) => Promise<void>;

type authControllerType = {
    authenticateUser: middlewareFunction;
    authorizeUser: middlewareFunction;
    verifyToken: middlewareFunction;
}

const authController: authControllerType = {} as authControllerType;

/**
 * AUTHENTICATES USER WITH EMAIL/PASSWORD INFO.
 */
authController.authenticateUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const authenticateUserQuery = `
    SELECT * 
    FROM public.user 
    WHERE public.user.email = $1;
    `;
    const data = await db.query(authenticateUserQuery, [email]);
    const user = data.rows[0];
    const verifyPassword = compareSync(password, user.password); // --> true/false
    if (verifyPassword){
      return next();
    } else {
      return next({
        log: 'Incorrect password',
        message: {err: 'MIDDLEWARE ERROR - authController.authenticateUser: Incorrect password'}
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
    res.cookie('token',token,{httpOnly:true, maxAge:24 * 60 * 60 * 1000});
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
// MODIFY LATER FOR FRONT END CHANGES TO BACKEND
authController.verifyToken = async (req, res, next) => {
  try{
    const { token } = req.cookies;
    if (token){
      const secret = process.env.ACCESS_TOKEN_SECRET as string;
      jwt.verify(token, secret); 
      return next();
    } else {
      return next({
        log: 'Not authorization credentials provided',
        message: {err: 'MIDDLEWARE ERROR - authController.verifyToken: Not authorization credentials provided'}
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