import { ChangeEvent, useEffect, useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import useMount from "../../../hooks/useMount";
import useMovieReducer from "../../../hooks/useMovieReducer";
import getMoviesBySearchParam from "../api/getMoviesBySearchParam";

function useSearch() {
  const [input, setInput] = useState<string>("");
  const { isMount } = useMount();
  const { fetchMovies, setKeyword, keyword } = useMovieReducer();

  useDebounce(() => {
    if (isMount) {
      return;
    }
    setKeyword(input);
  }, [input]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput(value);
  };

  useEffect(() => {}, [input]);

  const clearInput = () => {
    setInput("");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // TODO: set page
    fetchMovies(() => getMoviesBySearchParam({ page: 1, s: keyword }));
  };

  return { input, handleInputChange, clearInput, handleSubmit };
}

export default useSearch;
