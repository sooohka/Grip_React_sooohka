import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Movie } from "../domains/movie/types";
import getMoviesBySearchParam from "../domains/search/api/getMoviesBySearchParam";
import * as actions from "../modules/redux/movie/actions";
import fetchMoviesThunk from "../modules/redux/movie/thunk";
import { RootState } from "../modules/redux/store";

function useMovieReducer() {
  const { error, isFetchingMovies, movies, keyword, page } = useSelector(
    (state: RootState) => state.movieReducer
  );
  const dispatch = useDispatch();

  const addMovies = useCallback(
    (_movies: Movie[]) => {
      dispatch(actions.addMovies(_movies));
    },
    [dispatch]
  );

  const setKeyword = useCallback(
    (_keyword: string) => {
      dispatch(actions.setKeyword(_keyword));
    },
    [dispatch]
  );

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
    movies,
    keyword,
    page,
    addMovies,
    incrementPage,
    setKeyword,
    fetchMovies,
    error,
  };
}

export default useMovieReducer;
