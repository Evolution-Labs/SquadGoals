import { Request, Response, NextFunction } from 'express';
import db from '../models/squadGoalsModel.ts';


// LOCAL TYPES
type middlewareFunction = (req:Request, res:Response, next: NextFunction) => Promise<void>;

type dashboardControllerType = {
    getSquad: middlewareFunction;
    getUsers: middlewareFunction;
}

const dashboardController: dashboardControllerType = {} as dashboardControllerType;

/**
 * GETS SQUADS OF USER
 */
dashboardController.getSquad = async (req, res, next) => {
  try {
    const { squad_id } = res.locals;
    // SELECT all squads where user squad id is equal to squad id
    const getSquadQuery = `
    SELECT * 
    FROM public.squad 
    WHERE public.squad._id = $1;`;
    const data = await db.query(getSquadQuery, [squad_id]);
    res.locals.getSquad = data.rows[0];
    return next();
  } catch(error) {
    return next({
      log: `Error retrieving squadData: ${error}`,
      message: { err: `MIDDLEWARE ERROR - dashboardController.getSquad: ${error}`}
    });
  }
};

/**
 * GETS ALL USERS OF A SQUAD
 */
dashboardController.getUsers = async (req, res, next) => {
  try {
    const { squad_id } = res.locals;
    const getUsersQuery = `
      SELECT u._id, u.first_name, u.last_name 
      FROM public.user u 
      WHERE u.squad_id = $1;
    `;
    const data = await db.query(getUsersQuery, [squad_id]);

 
    res.locals.getUsers = data.rows;

    return next();
  } catch (error){
    return next({
      log: `Error retrieving usersData: ${error}`,
      message: { err: `MIDDLEWARE ERROR - dashboardController.getUsers: ${error}`}
    });
  }
};

export default dashboardController;