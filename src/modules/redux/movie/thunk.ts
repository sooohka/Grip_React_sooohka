import { ThunkAction } from "redux-thunk";
import getMoviesBySearchParam from "../../../domains/search/api/getMoviesBySearchParam";
import {
  MovieAction,
  fetchMoviesStart,
  addMovies,
  fetchMoviesFail,
  fetchMoviesSuccess,
} from "./actions";
import { MovieReducerState } from "./state";

type FetchMoviesThunk = (
  fetcher: () => ReturnType<typeof getMoviesBySearchParam>
) => ThunkAction<void, MovieReducerState, null, MovieAction>;

const fetchMoviesThunk: FetchMoviesThunk = (fetcher) => async (dispatch) => {
  dispatch(fetchMoviesStart());
  try {
    const { data } = await fetcher();
    dispatch(addMovies(data.movies));
    dispatch(fetchMoviesSuccess());
  } catch (err) {
    dispatch(fetchMoviesFail(err as Error));
  }
};
export type { FetchMoviesThunk };
export default fetchMoviesThunk;
