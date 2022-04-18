import { useState } from "react";
import useFavoritesReducer from "../../../hooks/useFavoritesReducer";
import { Movie } from "../types";

function useMovieModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<Movie>();
  const { addFavorites } = useFavoritesReducer();
  const handleModalClose = () => {
    setIsOpen(false);
  };
  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleLeftBtnClick = (movie: Movie) => () => {
    addFavorites(movie);
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

export default useMovieModal;
