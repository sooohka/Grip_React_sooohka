import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import movieReducer from "./movie/reducer";

const reduxStore = createStore(
  combineReducers({
    movieReducer,
  }),
  applyMiddleware(thunk, logger)
);

type RootState = ReturnType<typeof reduxStore.getState>;

export type { RootState };
export default reduxStore;
