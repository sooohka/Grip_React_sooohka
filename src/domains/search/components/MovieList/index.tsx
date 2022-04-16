import React from "react";
import useMovies from "../../hooks/useMovies";
import MovieListItem from "../MovieListItem";
import S from "./Style";

type Props = {
  query: string;
};

function MovieList({ query }: Props) {
  const { movies, error, target } = useMovies(query);

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
      <div
        ref={target}
        style={{ width: "200px", height: "200px", backgroundColor: "red" }}
      />
    </S.MovieList>
  );
}

export default MovieList;
