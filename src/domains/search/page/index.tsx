import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { Movie } from "../../../@types/movie";
import Footer from "../../../components/Layout/Footer";
import MovieList from "../../../components/MovieList";
import SearchBar from "../../../components/SearchBar";
import useMovieModal from "../hooks/useMovieModal";
import useMovies from "../hooks/useMovies";
import useMovieSearch from "../hooks/useMovieSearch";

function Search() {
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search).get("s"), [search]);
  const [input, setInput] = useState<string>(query || "");
  const { handleSubmit } = useMovieSearch(query || "", input);

  const { movies, error, isLoading, target } = useMovies();
  const { handleModalOpen, setCurrentMovie, Modal } = useMovieModal();

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
        lastMovieItemEl={target}
        MovieModal={Modal}
        movies={movies}
        error={error}
        isLoading={isLoading}
      />
      <Footer />
    </>
  );
}

export default Search;
