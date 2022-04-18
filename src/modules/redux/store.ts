import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";
import movieReducer from "./movie/reducer";
import favoritesReducer from "./favorites/reducer";
import localStorageApi from "../../utils/localstorageApi";

const preloadedFavoriteState = localStorageApi.getState("favorites");

const reduxStore = createStore(
  combineReducers({
    movieReducer,
    favoritesReducer,
  }),
  { favoritesReducer: preloadedFavoriteState },
  composeWithDevTools(applyMiddleware(thunk, logger))
);

type RootState = ReturnType<typeof reduxStore.getState>;

reduxStore.subscribe(() => {
  const { favoritesReducer: favoriteState } = reduxStore.getState();
  localStorageApi.saveState("favorites", favoriteState);
});

export type { RootState };
export default reduxStore;
