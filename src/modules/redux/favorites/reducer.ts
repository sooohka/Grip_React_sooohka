import { Reducer } from "redux";
import { FavoritesAction } from "./actions";
import initialState, { FavoritesReducerState } from "./state";

const movieReducer: Reducer<FavoritesReducerState, FavoritesAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "favorites/add": {
      const { movie } = action.payload;
      const foundMovie = state.favorites.find(
        (favorite) => favorite.imdbID === movie.imdbID
      );
      if (foundMovie) {
        throw new Error("이미 즐겨찾기에 추가되있습니다.");
      }
      const newFavorites = [...state.favorites, movie];
      return { ...state, favorites: newFavorites };
    }

    case "favorites/delete": {
      const { id } = action.payload;
      const filteredFavorites = state.favorites.filter(
        (favorite) => favorite.imdbID !== id
      );
      if (filteredFavorites.length === state.favorites.length) {
        throw new Error(
          "favorite reducer에 해당 id와 일치하는 favorite이 없습니다."
        );
      }
      return { ...state, favorites: filteredFavorites };
    }

    default: {
      return state;
    }
  }
};

export default movieReducer;
