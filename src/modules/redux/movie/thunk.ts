import { ThunkAction } from "redux-thunk";
import getMoviesBySearchParam from "../../../domains/search/api/getMoviesBySearchParam";
import {
  MovieAction,
  fetchMoviesStart,
  addMovies,
  fetchMoviesFail,
  fetchMoviesSuccess,
} from "./actions";
import { MovieState } from "./state";

type FetchMoviesThunk = (
  fetcher: () => ReturnType<typeof getMoviesBySearchParam>
) => ThunkAction<void, MovieState, null, MovieAction>;

const fetchMoviesThunk: FetchMoviesThunk = (fetcher) => async (dispatch) => {
  // loading State
  dispatch(fetchMoviesStart());
  try {
    const { data } = await fetcher();
    // TODO:호출되는지 테스트!
    dispatch(addMovies(data.movies));
    dispatch(fetchMoviesSuccess());
  } catch (err) {
    console.log(err);
    dispatch(fetchMoviesFail(err as Error));
  }
};
export type { FetchMoviesThunk };
export default fetchMoviesThunk;
