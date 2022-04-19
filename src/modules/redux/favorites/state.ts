import { Movie } from "../../../@types/movie";

type FavoritesReducerState = {
  favorites: Movie[];
};

const initialState: FavoritesReducerState = {
  favorites: [],
};

export type { FavoritesReducerState };
export default initialState;
