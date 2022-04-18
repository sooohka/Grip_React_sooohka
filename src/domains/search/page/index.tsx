import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieList from "../../../components/MovieList";
import MovieModal from "../components/MovieModal";
import MovieSearchBar from "../components/MovieSearchBar";
import useMovieModal from "../hooks/useMovieModal";
import useMovies from "../hooks/useMovies";
import useMovieSearch from "../hooks/useMovieSearch";

function Search() {
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search).get("s"), [search]);
  const { movies, error, isLoading, target } = useMovies();
  const [input, setInput] = useState<string>(query || "");
  const { handleSubmit } = useMovieSearch(query || "", input);

  const {
    handleModalOpen,
    handleModalClose,
    handleLeftBtnClick,
    isOpen,
    currentMovie,
    setCurrentMovie,
  } = useMovieModal();

  return (
    <>
      <MovieSearchBar
        handleSubmit={handleSubmit}
        input={input}
        setInput={setInput}
      />
      <MovieList
        handleModalOpen={handleModalOpen}
        setCurrentMovie={setCurrentMovie}
        lastMovieItemEl={target}
        MovieModal={
          <MovieModal
            isOpen={isOpen}
            handleClose={handleModalClose}
            handleLeftBtnClick={handleLeftBtnClick}
            currentMovie={currentMovie!}
          />
        }
        movies={movies}
        error={error}
        isLoading={isLoading}
      />
    </>
  );
}

export default Search;
