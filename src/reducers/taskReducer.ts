import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/actions';
import type { PayloadAction, Action } from '@reduxjs/toolkit';

type TaskState = {
  tasks: [],
  completed_tasks: []
}

const initialState: TaskState = {
  tasks: [],
  completed_tasks: []
};

const squadReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setTaskActionCreator, (state, action: Action) => {
      const { tasks, completed_tasks } = action.payload;
      // UPDATES STORE STATE WITH ALL TASKS FOR THE CURRENT SQUAD
      state.tasks = tasks;
      // UPDATES STORE STATE WITH COMPLETED TASKS FOR THE CURRENT SQUAD - ALL USERS
      state.completed_tasks = completed_tasks;
    })

    .addCase(actions.addCompletedTaskActionCreator, (state, action: Action) => {
      const { logTask } = action.payload;
      state.completed_tasks.push(logTask);
    })
});

export default squadReducer;