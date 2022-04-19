import { Movie } from "../../../@types/movie";

type MovieReducerState = {
  movies: Movie[];
  isFetchingMovies: boolean;
  error: Error | null;
  totalResults: number;
  page: number;
};

const initialState: MovieReducerState = {
  movies: [],
  isFetchingMovies: false,
  error: null,
  page: 1,
  totalResults: 0,
};

export type { MovieReducerState };
export default initialState;
