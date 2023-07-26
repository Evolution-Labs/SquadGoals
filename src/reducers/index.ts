import { combineReducers } from 'redux';
import userReducer from './userReducer.ts';
import squadReducer from './squadReducer.ts';
import taskReducer from './squadReducer.ts';

const reducers = combineReducers({
  userReducer,
  squadReducer,
  taskReducer
});

export default reducers;