import React, { useMemo, useState } from "react";
import { Movie } from "../../../@types/movie";
import useFavoritesReducer from "../../../hooks/useFavoritesReducer";
import MovieModal from "../components/MovieModal";

function useMovieModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<Movie>();
  const { addFavorites, deleteFavorites, favorites } = useFavoritesReducer();

  const isFavorite = useMemo(
    () =>
      favorites.some((favorite) => currentMovie?.imdbID === favorite.imdbID),
    [currentMovie, favorites]
  );

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleLeftBtnClick = (movie: Movie) => () => {
    if (isFavorite) {
      deleteFavorites(movie.imdbID);
    } else {
      addFavorites(movie);
    }
    setIsOpen(false);
  };

  const Modal = (
    <MovieModal
      isOpen={isOpen}
      isFavorite={isFavorite}
      handleClose={handleModalClose}
      handleLeftBtnClick={handleLeftBtnClick}
      currentMovie={currentMovie!}
    />
  );
  return {
    handleModalOpen,
    setCurrentMovie,
    Modal,
  };
}

export default useMovieModal;
