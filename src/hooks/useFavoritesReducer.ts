import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules/redux/store";
import * as Actions from "../modules/redux/favorites/actions";
import { Movie } from "../domains/search/types";

function useFavoritesReducer() {
  const { favorites } = useSelector(
    (state: RootState) => state.favoritesReducer
  );
  const dispatch = useDispatch();

  const addFavorites = useCallback(
    (movie: Movie) => {
      dispatch(Actions.addFavorite(movie));
    },
    [dispatch]
  );

  const deleteFavorites = useCallback(
    (id: string) => {
      dispatch(Actions.deleteFavorite(id));
    },
    [dispatch]
  );
  return { favorites, addFavorites, deleteFavorites };
}

export default useFavoritesReducer;
