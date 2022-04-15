import { Movie } from "../../../domains/movie/types";

const ACTIONS = {
  ADD_MOVIES: "movie/addMovies" as const,
  FETCHING_MOVIES_START: "movie/fetchingStart" as const,
  FETCHING_MOVIES_SUCCESS: "movie/fetchingSuccess" as const,
  FETCHING_MOVIES_FAIL: "movie/fetchingFail" as const,
};

const addMovies = (movies: Movie[]) => ({
  type: ACTIONS.ADD_MOVIES,
  payload: { movies },
});

const fetchMoviesStart = () => ({ type: ACTIONS.FETCHING_MOVIES_START });
const fetchMoviesSuccess = () => ({ type: ACTIONS.FETCHING_MOVIES_SUCCESS });
const fetchMoviesFail = (err: Error) => ({
  type: ACTIONS.FETCHING_MOVIES_FAIL,
  payload: { err },
});

type MovieAction =
  | ReturnType<typeof addMovies>
  | ReturnType<typeof fetchMoviesStart>
  | ReturnType<typeof fetchMoviesSuccess>
  | ReturnType<typeof fetchMoviesFail>;

export { addMovies, fetchMoviesFail, fetchMoviesStart, fetchMoviesSuccess };
export type { MovieAction };
export default ACTIONS;
