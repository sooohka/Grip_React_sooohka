import React from "react";
import useMovies from "../../hooks/useMovies";
import MovieListItem from "../MovieListItem";
import S from "./Style";

function MovieList() {
  const { movies, error } = useMovies();
  if (error) {
    return <S.NoMovieBox>{error.message}</S.NoMovieBox>;
  }
  if (movies.length === 0) {
    return <S.NoMovieBox>검색 결과가 없어요😭</S.NoMovieBox>;
  }
  return (
    <S.MovieList>
      {movies.map((movie) => (
        <MovieListItem key={movie.imdbID} movie={movie} />
      ))}
    </S.MovieList>
  );
}

export default MovieList;
