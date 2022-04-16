import { Movie } from "../../../domains/search/types";

const ACTIONS = {
  ADD_MOVIES: "movie/addMovies" as const,
  CLEAR_MOVIES: "movie/clearMovies" as const,
  SET_TOTAL_RESULTS: "movie/setTotalResults" as const,
  INCREMENT_PAGE: "movie/incrementPage" as const,
  FETCHING_MOVIES_START: "movie/fetchingStart" as const,
  FETCHING_MOVIES_SUCCESS: "movie/fetchingSuccess" as const,
  FETCHING_MOVIES_FAIL: "movie/fetchingFail" as const,
};

const addMovies = (movies: Movie[]) => ({
  type: ACTIONS.ADD_MOVIES,
  payload: { movies },
});

const clearMovies = () => ({
  type: ACTIONS.CLEAR_MOVIES,
});

const setTotalResults = (totalResults: number) => ({
  type: ACTIONS.SET_TOTAL_RESULTS,
  payload: { totalResults },
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
  | ReturnType<typeof clearMovies>
  | ReturnType<typeof incrementPage>
  | ReturnType<typeof setTotalResults>
  | ReturnType<typeof fetchMoviesStart>
  | ReturnType<typeof fetchMoviesSuccess>
  | ReturnType<typeof fetchMoviesFail>;

export {
  addMovies,
  clearMovies,
  setTotalResults,
  incrementPage,
  fetchMoviesFail,
  fetchMoviesStart,
  fetchMoviesSuccess,
};
export type { MovieAction };
export default ACTIONS;
