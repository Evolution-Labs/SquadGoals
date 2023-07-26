import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import reducers from './reducers/index';

const store = configureStore({
  reducer: reducers,
//   composeWithDevTools()
});

export default store;