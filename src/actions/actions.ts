import { createAction } from '@reduxjs/toolkit';

export const setUserActionCreator = createAction('SET_USER');

export const setSquadActionCreator = createAction('SET_SQUAD');

export const setTaskActionCreator = createAction('SET_TASK');

export const addCompletedTaskActionCreator = createAction('ADD_COMPLETED_TASK');

export const addSquadPointsActionCreator =  createAction('ADD_SQUAD_POINTS');

export const setUserPointsActionCreator =  createAction('ADD_USER_POINTS');

export const setCurrentCompletedActionCreator = createAction('ADD_CURRENT_COMPLETED');