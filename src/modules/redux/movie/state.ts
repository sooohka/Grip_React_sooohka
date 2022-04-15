import { Movie } from "../../../domains/movie/types";

type MovieState = {
  movies: Movie[];
  isFetchingMovies: boolean;
  error: Error | null;
};
const initialState: MovieState = {
  movies: [],
  isFetchingMovies: false,
  error: null,
};

export type { MovieState };
export default initialState;
