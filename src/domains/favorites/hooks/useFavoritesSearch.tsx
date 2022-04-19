import { useCallback, useState } from "react";
import { Movie } from "../../../@types/movie";
import useDebounce from "../../../hooks/useDebounce";
import useFavoritesReducer from "../../../hooks/useFavoritesReducer";

function useFavoritesSearch(input: string) {
  const { favorites } = useFavoritesReducer();
  const [currentFavorites, setCurrentFavorites] = useState<Movie[]>(favorites);

  const getFavorites = useCallback(() => {
    setCurrentFavorites(
      favorites.filter((favorite) =>
        favorite.title.toLowerCase().includes(input.toLowerCase())
      )
    );
  }, [favorites, input]);

  useDebounce(getFavorites, 400);

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    getFavorites();
  };

  return { handleSubmit, currentFavorites };
}

export default useFavoritesSearch;
