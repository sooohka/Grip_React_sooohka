import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import useMovieReducer from "../../../hooks/useMovieReducer";
import getMoviesBySearchParam from "../api/getMoviesBySearchParam";

function useSearch() {
  const { search } = useLocation();
  const { fetchMovies, clearMovies } = useMovieReducer();

  const query = useMemo(() => new URLSearchParams(search).get("s"), [search]);

  useEffect(() => {
    if (!query) {
      return;
    }
    clearMovies();
    fetchMovies(() => getMoviesBySearchParam({ page: 1, s: query }));
  }, [clearMovies, fetchMovies, query]);
  return { query };
}

export default useSearch;
