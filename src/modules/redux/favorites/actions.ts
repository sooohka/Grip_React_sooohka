import { Movie } from "../../../domains/search/types";

const ACTIONS = {
  ADD_FAVORITE: "favorites/add" as const,
  DELETE_FAVORITE: "favorites/delete" as const,
};

const addFavorite = (movie: Movie) => ({
  type: ACTIONS.ADD_FAVORITE,
  payload: { movie },
});

const deleteFavorite = (id: Movie["imdbID"]) => ({
  type: ACTIONS.DELETE_FAVORITE,
  payload: { id },
});

type FavoritesAction =
  | ReturnType<typeof addFavorite>
  | ReturnType<typeof deleteFavorite>;

export { addFavorite, deleteFavorite };
export type { FavoritesAction };
export default ACTIONS;
