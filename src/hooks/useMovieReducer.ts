import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../domains/movie/types";
import getMoviesBySearchParam from "../domains/search/api/getMoviesBySearchParam";
import * as actions from "../modules/redux/movie/actions";
import fetchMoviesThunk from "../modules/redux/movie/thunk";
import { RootState } from "../modules/redux/store";

function useMovieReducer() {
  const { error, isFetchingMovies, movies } = useSelector(
    (state: RootState) => state.movieReducer
  );
  const dispatch = useDispatch();

  const addMovies = useCallback(
    (_movies: Movie[]) => {
      actions.addMovies(_movies);
    },
    [dispatch]
  );

  const fetchMovies = useCallback(
    (fetcher: () => ReturnType<typeof getMoviesBySearchParam>) => {
      fetchMoviesThunk(fetcher);
    },
    [dispatch]
  );

  return { isFetchingMovies, movies, addMovies, fetchMovies, error };
}

export default useMovieReducer;
