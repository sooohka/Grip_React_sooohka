import { Movie } from "../../../domains/movie/types";

const ACTIONS = {
  ADD_MOVIES: "movie/addMovies" as const,
  FETCHING_MOVIES_START: "movie/fetchingStart" as const,
  FETCHING_MOVIES_SUCCESS: "movie/fetchingSuccess" as const,
  FETCHING_MOVIES_FAIL: "movie/fetchingFail" as const,
  SET_KEYWORD: "movie/setKeyword" as const,
  INCREMENT_PAGE: "movie/incrementPage" as const,
};

const addMovies = (movies: Movie[]) => ({
  type: ACTIONS.ADD_MOVIES,
  payload: { movies },
});

const setKeyword = (keyword: string) => ({
  type: ACTIONS.SET_KEYWORD,
  payload: { keyword },
});

const incrementPage = () => ({
  type: ACTIONS.INCREMENT_PAGE,
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
  | ReturnType<typeof fetchMoviesFail>
  | ReturnType<typeof setKeyword>
  | ReturnType<typeof incrementPage>;

export {
  addMovies,
  setKeyword,
  incrementPage,
  fetchMoviesFail,
  fetchMoviesStart,
  fetchMoviesSuccess,
};
export type { MovieAction };
export default ACTIONS;
