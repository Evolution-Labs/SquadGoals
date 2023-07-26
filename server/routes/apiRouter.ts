import express, { Express, Request, Response } from 'express';
import authController from '../controllers/authController.ts';
import dashboardController from '../controllers/dashboardController.ts';
import taskController from '../controllers/taskController.ts';
const apiRouter = express.Router();

/**
 * GETS ALL NECESSARY DASHBOARD DATA OF A USER FOR ONE SQUAD -- REQUIRES SQUAD_ID
 */
apiRouter.post(
  '/dashboard',
  authController.verifyToken,
  dashboardController.getSquad,
  dashboardController.getUsers,
  taskController.getTasks,
  taskController.getCompletedTasks,
  (req: Request, res: Response) => {
    const { getSquad, getUsers, getTasks, getCompletedTasks, getUserPoints, getSquadPoints } = res.locals;
    res.status(200).json(
      { 
        dashboardData: 
        {
          getSquad,
          getUsers,
          getTasks,
          getCompletedTasks,
          getUserPoints,
          getSquadPoints
        }
      }
    );
  }
);

/**
 * ADDS A TASK TO THE SQUAD - REQUIRES NAME, POINTS, SQUAD_ID, DAILY_CHALLENGE
 */
apiRouter.post(
  '/tasks',
  authController.verifyToken,
  taskController.addTask,
  taskController.getTasks,
  taskController.getCompletedTasks,
  (req: Request, res: Response) => {
    const { getTasks, getCompletedTasks } = res.locals;
    res.status(200).json({
      getTasks,
      getCompletedTasks,
      message: 'Task created successfully!'
    });
  }
);

/**
 * LOGS WHEN A TASK IS COMPLETED BY A USER - REQUIRES TASK_ID, SQUAD_ID, AND USER_ID
 */
apiRouter.post(
  '/logTask',
  authController.verifyToken,
  taskController.logTask,
  (req: Request, res: Response) => {
    const { logTask, logTaskPoints } = res.locals;
    res.status(200).json({
      logTask,
      message: 'Task logged successfully!'
    });
  }
);

/**
 * REMOVES A TASK FROM THE SQUAD - REQUIRES TASK_ID AND SQUAD_ID
 */
apiRouter.patch(
  '/tasks',
  authController.verifyToken,
  taskController.removeTask,
  taskController.getTasks,
  (req: Request, res: Response) => {
    const { getTasks } = res.locals;
    res.status(200).json({ 
      getTasks,
      message: 'Task removed successfully!'
    });
  }
);

export default apiRouter;