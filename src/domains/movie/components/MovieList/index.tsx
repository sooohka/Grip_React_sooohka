import React, { useEffect, useState } from "react";
import getMoviesBySearchParam from "../../../search/api/getMoviesBySearchParam";
import { Movie } from "../../types";
import MovieListItem from "../MovieListItem";
import S from "./Style";

function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    getMoviesBySearchParam({ page: 2, s: "iron man" }).then((res) => {
      setMovies(res.data.movies);
    });
  }, []);
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
