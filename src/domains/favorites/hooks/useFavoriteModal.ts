import { useState } from "react";
import useFavoritesReducer from "../../../hooks/useFavoritesReducer";
import { Movie } from "../../search/types";

function useFavoriteModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<Movie>();
  const { deleteFavorites } = useFavoritesReducer();
  const handleModalClose = () => {
    setIsOpen(false);
  };
  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleLeftBtnClick = (movie: Movie) => () => {
    deleteFavorites(movie.imdbID);
    setIsOpen(false);
  };

  return {
    isOpen,
    handleModalOpen,
    handleModalClose,
    handleLeftBtnClick,
    currentMovie,
    setCurrentMovie,
  };
}

export default useFavoriteModal;
