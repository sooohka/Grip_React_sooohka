import { useCallback, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import useFavoritesReducer from "../../../hooks/useFavoritesReducer";
import { Movie } from "../../search/types";

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

  const handleSubmit = () => {
    getFavorites();
  };

  return { handleSubmit, currentFavorites };
}

export default useFavoritesSearch;
