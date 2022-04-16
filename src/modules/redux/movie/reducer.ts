import { Reducer } from "redux";
import { MovieAction } from "./actions";
import initialState, { MovieReducerState } from "./state";

const movieReducer: Reducer<MovieReducerState, MovieAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "movie/addMovies": {
      const { movies } = action.payload;
      return { ...state, movies: [...state.movies, ...movies] };
    }
    case "movie/setKeyword": {
      const { keyword } = action.payload;
      return { ...state, keyword };
    }
    case "movie/incrementPage": {
      return { ...state, page: state.page + 1 };
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

export type { MovieReducerState, MovieAction };
export default movieReducer;
