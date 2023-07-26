import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/actions';
import type { PayloadAction, Action } from '@reduxjs/toolkit';

type TaskState = {
  tasks: [],
  completed_tasks: [],
  current_completed:string[]
}

const initialState: TaskState = {
  tasks: [],
  completed_tasks: [],
  current_completed:[]
};
//   "getTasks": [
//       {
//           "_id": 1,
//           "name": "Touch Grass",
//           "points": 5,
//           "squad_id": 1,
//           "daily_challenge": true,
//           "created_at": "2023-07-25T20:58:22.000Z",
//           "updated_at": null,
//           "deleted_at": null
//       }
//   ],
//   "getCompletedTasks": [
//       {
//           "_id": 1,
//           "name": "Touch Grass",
//           "points": 5,
//           "squad_id": 1,
//           "daily_challenge": true,
//           "created_at": "2023-07-25T21:02:42.000Z",
//           "updated_at": null,
//           "deleted_at": null,
//           "task_id": 1,
//           "user_id": 1
//       }
//   ],
const taskReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setTaskActionCreator, (state, action: Action) => {
      const { tasks, completed_tasks } = action.payload;
      // UPDATES STORE STATE WITH ALL TASKS FOR THE CURRENT SQUAD
      state.tasks = tasks;
      // UPDATES STORE STATE WITH COMPLETED TASKS FOR THE CURRENT SQUAD - ALL USERS
      state.completed_tasks = completed_tasks;
      // state.current_completed = current_completed;
    })
    .addCase(actions.addCompletedTaskActionCreator, (state, action: Action) => {
      const { logTask } = action.payload;
      state.completed_tasks.push(logTask);
    })
    .addCase(actions.setCurrentCompletedActionCreator, (state, action: Action) => {
      const { completed } = action.payload;
      state.current_completed.push(completed);
    });
});

export default taskReducer;
