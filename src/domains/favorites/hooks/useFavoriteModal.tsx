import React, { useState } from "react";
import { Movie } from "../../../@types/movie";
import useFavoritesReducer from "../../../hooks/useFavoritesReducer";
import FavoriteModal from "../components/FavoriteModal";

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

  const Modal = (
    <FavoriteModal
      isOpen={isOpen}
      handleClose={handleModalClose}
      handleLeftBtnClick={handleLeftBtnClick}
      currentMovie={currentMovie!}
    />
  );

  return { handleModalOpen, setCurrentMovie, Modal };
}

export default useFavoriteModal;
