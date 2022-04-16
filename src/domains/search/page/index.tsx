import React from "react";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import useSearch from "../hooks/useSearch";

function Search() {
  const { query } = useSearch();

  return (
    <>
      <SearchBar query={query || ""} />
      <MovieList query={query || ""} />
    </>
  );
}

export default Search;
