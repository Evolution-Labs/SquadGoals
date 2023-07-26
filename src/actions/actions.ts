import { createAction } from '@reduxjs/toolkit';

export const setUserActionCreator = createAction('SET_USER');

export const setSquadActionCreator = createAction('SET_SQUAD');

export const setTaskActionCreator = createAction('SET_TASK');

export const addCompletedTaskActionCreator = createAction('ADD_COMPLETED_TASK');