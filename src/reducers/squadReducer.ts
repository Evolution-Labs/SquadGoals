import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import * as actions from '../actions/actions';

type SquadState = {
    name: string,
    description: string,
    squadKey: string,
    points: number
}

const initialState: SquadState = {
  name: '',
  description: '',
  squadKey: '',
  points: 0,
};

const squadReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.setSquadActionCreator, (state, action: PayloadAction) => {
      const { name, description, squad_key, points } = action.payload;
      // UPDATE STORE STATE OF THE CURRENT SQUAD PAGE
      state.name  = name;
      state.description  = description;
      state.squadKey  = squad_key;
      state.points  = points;
    });
});

export default squadReducer;