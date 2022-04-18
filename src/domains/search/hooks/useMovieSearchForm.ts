import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useMovieReducer from "../../../hooks/useMovieReducer";

function useMovieSearchForm(input: string) {
  const navigate = useNavigate();
  const { clearMovies } = useMovieReducer();
  const { pathname, search } = useLocation();

  const currentPath = useMemo(() => pathname + search, [pathname, search]);

  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      clearMovies();
      if (currentPath === `/search?s=${input}`) {
        window.location.reload();
      }
      navigate(`/search?s=${input}`);
    },
    [clearMovies, currentPath, input, navigate]
  );

  return { input, handleSubmit };
}

export default useMovieSearchForm;
