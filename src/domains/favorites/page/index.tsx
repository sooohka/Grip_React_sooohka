import React, { useState } from "react";
import MovieList from "../../../components/MovieList";
import FavoriteModal from "../components/FavoriteModal";
import FavoritesSearchBar from "../components/FavoritesSearchBar";
import useFavoriteModal from "../hooks/useFavoriteModal";
import useFavoritesSearch from "../hooks/useFavoritesSearch";

function Favorite() {
  const [input, setInput] = useState("");
  const { currentFavorites, handleSubmit } = useFavoritesSearch(input);

  const {
    isOpen,
    handleModalOpen,
    handleModalClose,
    handleLeftBtnClick,
    setCurrentMovie,
    currentMovie,
  } = useFavoriteModal();

  return (
    <>
      <FavoritesSearchBar
        handleSubmit={handleSubmit}
        input={input}
        setInput={setInput}
      />
      <MovieList
        handleModalOpen={handleModalOpen}
        setCurrentMovie={setCurrentMovie}
        MovieModal={
          <FavoriteModal
            isOpen={isOpen}
            handleClose={handleModalClose}
            handleLeftBtnClick={handleLeftBtnClick}
            currentMovie={currentMovie!}
          />
        }
        movies={currentFavorites}
      />
    </>
  );
}

export default Favorite;
