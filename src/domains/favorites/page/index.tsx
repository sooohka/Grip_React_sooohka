import React, { useState } from "react";
import { Movie } from "../../../@types/movie";
import Footer from "../../../components/Layout/Footer";
import MovieList from "../../../components/MovieList";
import SearchBar from "../../../components/SearchBar";
import useFavoriteModal from "../hooks/useFavoriteModal";
import useFavoritesSearch from "../hooks/useFavoritesSearch";

function Favorite() {
  const [input, setInput] = useState("");
  const { currentFavorites, handleSubmit } = useFavoritesSearch(input);

  const { Modal, handleModalOpen, setCurrentMovie } = useFavoriteModal();

  const handleListItemClick = (movie: Movie) => () => {
    setCurrentMovie(movie);
    handleModalOpen();
  };

  return (
    <>
      <SearchBar
        handleSubmit={handleSubmit}
        input={input}
        setInput={setInput}
      />
      <MovieList
        handleModalOpen={handleModalOpen}
        handleListItemClick={handleListItemClick}
        MovieModal={Modal}
        movies={currentFavorites}
      />
      <Footer />
    </>
  );
}

export default Favorite;
