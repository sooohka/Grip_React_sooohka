import { Movie } from "../../../domains/search/types";

type FavoritesReducerState = {
  favorites: Movie[];
};

const initialState: FavoritesReducerState = {
  favorites: [],
};

export type { FavoritesReducerState };
export default initialState;
