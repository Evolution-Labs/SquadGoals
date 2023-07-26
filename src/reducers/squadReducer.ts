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
//   "getSquad": {
//       "_id": 1,
//       "name": "Cohort 58",
//       "description": "A big ole barrel of bakas",
//       "squad_key": "sussybaka",
//       "created_at": "2023-07-26T03:47:49.057Z",
//       "updated_at": null,
//       "deleted_at": null
//   }
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