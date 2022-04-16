import { ChangeEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMovieReducer from "../../../hooks/useMovieReducer";

function useSearchForm(initInputValue: string) {
  const [input, setInput] = useState<string>(initInputValue);
  const navigate = useNavigate();
  const { clearMovies } = useMovieReducer();

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  }, []);

  const clearInput = useCallback(() => {
    setInput("");
  }, []);

  const handleSubmit = useCallback(
    async (e: any) => {
      e.preventDefault();
      clearMovies();
      navigate(`/search?s=${input}`);
    },
    [clearMovies, input, navigate]
  );

  return { input, handleInputChange, clearInput, handleSubmit };
}

export default useSearchForm;
