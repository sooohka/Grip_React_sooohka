import React from "react";
import Spinner from "../../../../components/Spinner";
import useMovies from "../../hooks/useMovies";
import MovieListItem from "../MovieListItem";
import S from "./Style";

type Props = {
  query: string;
};

function MovieList({ query }: Props) {
  const { movies, error, target, isLoading } = useMovies(query);

  if (error) {
    return <S.FeedBack>{error.message}</S.FeedBack>;
  }

  if (movies.length === 0) {
    return <S.FeedBack>검색 결과가 없어요😭</S.FeedBack>;
  }

  return (
    <S.MovieList>
      {isLoading && <Spinner />}
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
