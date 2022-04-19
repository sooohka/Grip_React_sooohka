import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import movieReducer from "./movie/reducer";
import favoritesReducer from "./favorites/reducer";
import localStorageApi from "../../utils/localstorageApi";

const isDev = process.env.NODE_ENV === "development";

const preloadedFavoriteState = localStorageApi.getState("favorites");

const reduxStore = createStore(
  combineReducers({
    movieReducer,
    favoritesReducer,
  }),
  { favoritesReducer: preloadedFavoriteState },
  isDev
    ? composeWithDevTools(applyMiddleware(thunk, logger))
    : applyMiddleware(thunk)
);

type RootState = ReturnType<typeof reduxStore.getState>;

reduxStore.subscribe(() => {
  const { favoritesReducer: favoriteState } = reduxStore.getState();
  localStorageApi.saveState("favorites", favoriteState);
});

export type { RootState };
export default reduxStore;
