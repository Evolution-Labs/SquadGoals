import { createReducer, createAction } from '@reduxjs/toolkit';
import { setUserActionCreator } from '../actions/actions.ts';
import type { PayloadAction } from '@reduxjs/toolkit';

type UserType = {
  first_name: string,
  last_name: string,
  points: number,
  squads: []
}

const initialState = {
  first_name: '',
  last_name: '',
  points: 0,
  squads: []
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUserActionCreator, (state, action: PayloadAction<UserType>) => {
      const { first_name, last_name, points, squads } = action.payload;
      // UPDATES THE STORE STATE FOR USER UPON LOGIN
      state.first_name = first_name;
      state.last_name = last_name;
      state.points = points;
      state.squads = squads;
    });
});
export default userReducer;