import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import movieReducer from "./movie/reducer";
import favoritesReducer from "./favorites/reducer";

const reduxStore = createStore(
  combineReducers({
    movieReducer,
    favoritesReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk, logger))
);

type RootState = ReturnType<typeof reduxStore.getState>;

export type { RootState };
export default reduxStore;
