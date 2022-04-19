import React, { useState } from "react";
import Footer from "../../../components/Layout/Footer";
import MovieList from "../../../components/MovieList";
import SearchBar from "../../../components/SearchBar";
import FavoriteModal from "../components/FavoriteModal";
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
      <SearchBar
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
      <Footer />
    </>
  );
}

export default Favorite;
