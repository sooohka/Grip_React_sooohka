import { FavoritesReducerState } from "../modules/redux/favorites/state";
import { MovieReducerState } from "../modules/redux/movie/state";

type Key = "favorites" | "movie";

function saveState(key: Key, state: MovieReducerState | FavoritesReducerState) {
  localStorage.setItem(key, JSON.stringify(state));
}

function getState(key: Key) {
  try {
    const state = localStorage.getItem(key);
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (er) {
    return undefined;
  }
}

const localStorageApi = {
  saveState,
  getState,
};

export default localStorageApi;
