import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import getMoviesBySearchParam from "../domains/search/api/getMoviesBySearchParam";
import * as actions from "../modules/redux/movie/actions";
import fetchMoviesThunk from "../modules/redux/movie/thunk";
import { RootState } from "../modules/redux/store";

function useMovieReducer() {
  const { error, isFetchingMovies, movies, page, totalResults } = useSelector(
    (state: RootState) => state.movieReducer
  );

  const dispatch = useDispatch();

  const clearMovies = useCallback(() => {
    dispatch(actions.clearMovies());
  }, [dispatch]);

  const incrementPage = useCallback(() => {
    dispatch(actions.incrementPage());
  }, [dispatch]);

  const fetchMovies = useCallback(
    (fetcher: () => ReturnType<typeof getMoviesBySearchParam>) => {
      dispatch(fetchMoviesThunk(fetcher));
    },
    [dispatch]
  );

  return {
    isFetchingMovies,
    totalResults,
    movies,
    page,
    clearMovies,
    incrementPage,
    fetchMovies,
    error,
  };
}

export default useMovieReducer;
