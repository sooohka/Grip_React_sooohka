import { Movie } from "../../../@types/movie";

const ACTIONS = {
  ADD_FAVORITES: "favorites/add" as const,
  DELETE_FAVORITES: "favorites/delete" as const,
};

const addFavorite = (movie: Movie) => ({
  type: ACTIONS.ADD_FAVORITES,
  payload: { movie },
});

const deleteFavorite = (id: Movie["imdbID"]) => ({
  type: ACTIONS.DELETE_FAVORITES,
  payload: { id },
});

type FavoritesAction =
  | ReturnType<typeof addFavorite>
  | ReturnType<typeof deleteFavorite>;

export { addFavorite, deleteFavorite };
export type { FavoritesAction };
export default ACTIONS;
