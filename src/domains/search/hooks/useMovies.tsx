import { useCallback, useEffect, useRef } from "react";
import useMovieReducer from "../../../hooks/useMovieReducer";

function useMovies() {
  const target = useRef<any>(null);

  const { error, movies, isFetchingMovies, incrementPage, totalResults } =
    useMovieReducer();

  const observerCallback: IntersectionObserverCallback = useCallback(
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
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 1,
    });
    if (target.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [observerCallback]);

  return { movies, error, target, isLoading: isFetchingMovies };
}

export default useMovies;
