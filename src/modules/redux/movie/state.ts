import { Movie } from "../../../domains/movie/types";

type MovieReducerState = {
  movies: Movie[];
  isFetchingMovies: boolean;
  error: Error | null;
  keyword: string;
  page: number;
};
const initialState: MovieReducerState = {
  movies: [],
  isFetchingMovies: false,
  error: null,
  keyword: "",
  page: 1,
};

export type { MovieReducerState };
export default initialState;
