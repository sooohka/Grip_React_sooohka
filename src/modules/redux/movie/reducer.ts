import { Reducer } from "redux";
import { MovieAction } from "./actions";
import initialState, { MovieState } from "./state";

const movieReducer: Reducer<MovieState, MovieAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "movie/addMovies": {
      const { movies } = action.payload;
      return { ...state, movies: [...state.movies, ...movies] };
    }
    case "movie/fetchingStart": {
      return { ...state, isFetchingMovies: true };
    }
    case "movie/fetchingSuccess": {
      return { ...state, isFetchingMovies: false, error: null };
    }
    case "movie/fetchingFail": {
      const { err } = action.payload;
      return { ...state, isFetchingMovies: false, error: err };
    }
    default: {
      return state;
    }
  }
};

export type { MovieState, MovieAction };
export default movieReducer;
