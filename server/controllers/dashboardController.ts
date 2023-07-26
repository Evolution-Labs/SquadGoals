import { Request, Response, NextFunction } from 'express';
import db from '../models/squadGoalsModel.ts';


// LOCAL TYPES
type middlewareFunction = (req:Request, res:Response, next: NextFunction) => Promise<void>;

type dashboardControllerType = {
    getSquads: middlewareFunction;
    getUsers: middlewareFunction;
}

const dashboardController: dashboardControllerType = {} as dashboardControllerType;

/**
 * GETS SQUADS OF USER
 */
dashboardController.getSquads = async (req, res, next) => {
  try {
    const { squad_id } = req.body;
    const getSquadsQuery = `
    SELECT * FROM public.squad 
    WHERE public.squad._id = $1;`;
    const data = await db.query(getSquadsQuery, [squad_id]);
    console.log('squadsData', data);
    res.locals.getSquads = data.rows[0];
    return next();
  } catch(error) {
    return next({
      log: `Error retrieving squadsData: ${error}`,
      message: { err: `MIDDLEWARE ERROR - dashboardController.getSquad: ${error}`}
    });
  }
};

/**
 * GETS ALL USERS OF A SQUAD
 */
dashboardController.getUsers = async (req, res, next) => {
  try {
    const { squad_id } = req.body;
    const getUsersQuery = `
      SELECT u._id, u.first_name, u.last_name 
      FROM public.user u 
      WHERE u.squad_id = $1;
    `;
    const data = await db.query(getUsersQuery, [squad_id]);
    console.log('usersData', data);
    res.locals.getUsers = data.rows[0];
    return next();
  } catch (error){
    return next({
      log: `Error retrieving usersData: ${error}`,
      message: { err: `MIDDLEWARE ERROR - dashboardController.getUsers: ${error}`}
    });
  }
};

export default dashboardController;