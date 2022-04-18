import { useCallback, useEffect, useRef } from "react";
import useMovieReducer from "../../../hooks/useMovieReducer";
import getMoviesBySearchParam from "../api/getMoviesBySearchParam";

function useMovies(query: string) {
  const target = useRef<any>(null);
  const isMount = useRef(true);

  const {
    error,
    movies,
    fetchMovies,
    isFetchingMovies,
    page,
    incrementPage,
    totalResults,
  } = useMovieReducer();

  const callback: IntersectionObserverCallback = useCallback(
    (entries) => {
      const [currentTarget] = entries;
      const isDone = totalResults <= movies.length;
      if (currentTarget.isIntersecting && isDone === false) {
        if (isFetchingMovies) {
          return;
        }
        incrementPage();
      }
    },
    [incrementPage, isFetchingMovies, movies.length, totalResults]
  );

  useEffect(() => {
    if (isMount.current || page === 1) {
      return;
    }
    fetchMovies(() => getMoviesBySearchParam({ page, s: query }));
  }, [fetchMovies, page, query]);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, { threshold: 1 });
    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [callback]);

  useEffect(() => {
    isMount.current = false;
    return () => {
      isMount.current = true;
    };
  }, []);
  return { movies, error, target, isLoading: isFetchingMovies };
}

export default useMovies;
