import { useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useMovieReducer from "../../../hooks/useMovieReducer";
import getMoviesBySearchParam from "../api/getMoviesBySearchParam";

function useMovieSearch(query: string, input: string) {
  const { fetchMovies, clearMovies, page } = useMovieReducer();
  const navigate = useNavigate();
  const isMount = useRef(true);

  useEffect(() => {
    if (!query) {
      return;
    }
    clearMovies();
    fetchMovies(() => getMoviesBySearchParam({ page: 1, s: query }));
  }, [clearMovies, fetchMovies, query]);

  useEffect(() => {
    if (isMount.current || page === 1) {
      return;
    }
    fetchMovies(() => getMoviesBySearchParam({ page, s: query }));
  }, [fetchMovies, page, query]);

  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      clearMovies();
      if (query === input) {
        window.location.reload();
      }
      navigate(`/search?s=${input}`);
    },
    [clearMovies, input, navigate, query]
  );

  useEffect(() => {
    isMount.current = false;
    return () => {
      isMount.current = true;
    };
  }, []);

  return { query, handleSubmit };
}

export default useMovieSearch;
