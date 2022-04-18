import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useMovieReducer from "../../../hooks/useMovieReducer";

function useSearchForm(initInputValue: string) {
  const [input, setInput] = useState<string>(initInputValue);
  const navigate = useNavigate();
  const { clearMovies } = useMovieReducer();
  const { pathname, search } = useLocation();
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  }, []);

  const currentPath = useMemo(() => pathname + search, [pathname, search]);

  const clearInput = useCallback(() => {
    setInput("");
  }, []);

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

  return { input, handleInputChange, clearInput, handleSubmit };
}

export default useSearchForm;
