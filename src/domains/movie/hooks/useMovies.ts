import useMovieReducer from "../../../hooks/useMovieReducer";

function useMovies() {
  const { error, movies } = useMovieReducer();
  return { movies, error };
}

export default useMovies;
