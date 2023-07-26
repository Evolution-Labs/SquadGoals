import { Request, Response, NextFunction } from 'express';
import db from '../models/squadGoalsModel.ts';
import dayjs from 'dayjs';

// LOCAL TYPES
type middlewareFunction = (req:Request, res:Response, next: NextFunction) => Promise<void>;

type taskControllerType = {
    getTasks: middlewareFunction;
    getCompletedTasks: middlewareFunction;
    logTask: middlewareFunction;
    addTask: middlewareFunction;
    removeTask: middlewareFunction;
}

const taskController: taskControllerType = {} as taskControllerType;

/**
 * GETS ALL TASKS OF A SQUAD
 */
taskController.getTasks = async (req, res, next) => {
  try {
    const { squad_id } = res.locals;
    const getTasksQuery = `
    SELECT * FROM public.task t
    WHERE 
    t.squad_id = $1 
    AND 
    t.deleted_at IS null;
    `;
    const data = await db.query(getTasksQuery, [squad_id]);
    res.locals.getTasks = data.rows;
    return next();
  } catch(error) {
    return next({
      log: `Error retrieving tasks from a squad: ${error}`,
      message: { err: `MIDDLEWARE ERROR - taskController.getTasks: ${error}`}
    });
  }
};

/**
 * GETS ALL COMPLETED TASKS OF A SQUAD
 */
taskController.getCompletedTasks = async (req, res, next) => {
  try {
    // ADDED user_id TO FILTER FOR USER POINTS
    const { user_id, squad_id } = res.locals;
    const getCompletedTasksQuery = `
    SELECT * FROM public.task t 
    LEFT JOIN public.completed_tasks c 
    ON c.task_id = t._id 
    WHERE c.squad_id = $1;
    `;
    // const getCompletedTasksQuery = `
    // SELECT * FROM public.completed_tasks c 
    // LEFT JOIN public.task t 
    // ON c.task_id = t._id 
    // WHERE t.squad_id = $1
    // LEFT JOIN public.user u
    // ON c.user_id = u._id
    // WHERE u._id = $2
    // `;
    const data = await db.query(getCompletedTasksQuery, [squad_id]);
    const completedTasks = data.rows;

    let getUserPoints = 0;
    const getSquadPoints = completedTasks.reduce((total, task) => {
      total += task.points;
      if (task.user_id === user_id){
        getUserPoints += task.points;
      }
      return total;
    }, 0);

    res.locals.getCompletedTasks = completedTasks;
    res.locals.getUserPoints = getUserPoints;
    res.locals.getSquadPoints = getSquadPoints;
    return next();
  } catch(error) {
    return next({
      log: `Error retrieving completed task of a squad: ${error}`,
      message: { err: `MIDDLEWARE ERROR - taskController.getCompletedTasks: ${error}`}
    });
  }
};

/**
 * LOGS A TASK AS COMPLETED
 */
taskController.logTask = async (req, res, next) => {
  try {
    const { task_id } = req.body;
    const { squad_id, user_id, } = res.locals;
    const createdAt = dayjs().format();
    const logTaskQuery = `
      INSERT INTO public.completed_tasks
      (task_id, squad_id, user_id, created_at) 
      VALUES ($1, $2, $3, $4)
      RETURNING *;
      `;
    const data = await db.query(logTaskQuery, [task_id, squad_id, user_id, createdAt]);
    const task = data.rows[0];
    res.locals.logTask = task;
    return next();
  } catch(error) {
    return next({
      log: `Error adding to the task log: ${error}`,
      message: { err: `MIDDLEWARE ERROR - taskController.logTask: ${error}`}
    });
  }
};


/**
 * ADDS A NEW TASK TO A SQUAD
 */
taskController.addTask = async (req, res, next) => {
  try {
    const { squad_id } = res.locals;
    const { name, points, daily_challenge } = req.body;
    const createdAt = dayjs().format();
    const addTaskQuery = `
    INSERT INTO public.task
    (name, points, squad_id, daily_challenge, created_at)
    VAlUES ($1, $2, $3, $4, $5);
    `;
    await db.query(addTaskQuery, [name, points, squad_id, daily_challenge, createdAt]);
    return next();
  } catch(error) {
    return next({
      log: `Error adding task: ${error}`,
      message: { err: `MIDDLEWARE ERROR - taskController.addTask: ${error}`}
    });
  }
};

/**
 * REMOVE A TASK FROM A SQUAD BY FILLING IN DELETED_AT COLUMN
 */
taskController.removeTask = async (req, res, next) => {
  try {
    const { task_id } = req.body;
    const deletedAt = dayjs().format(); 
    const removeTaskQuery = `
    UPDATE public.task
    SET deleted_at = $1
    WHERE _id = $2;
    `;
    await db.query(removeTaskQuery, [deletedAt, task_id]);
    return next();
  } catch(error) {
    return next({
      log: `Error deleting task: ${error}`,
      message: { err: `MIDDLEWARE ERROR - taskController.deleteTask: ${error}`}
    });
  }
};

export default taskController;