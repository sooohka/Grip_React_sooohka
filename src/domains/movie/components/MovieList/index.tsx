import React, { useEffect, useState } from "react";
import axiosInstance from "../../../../api";
import { Movie } from "../../types";
import MovieListItem from "../MovieListItem";
import S from "./Style";

const api = "https://www.omdbapi.com/?apikey=92e32667&s=iron%20man&page=1";
function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    axiosInstance.get<{ movies: Movie[] }>(api).then((res) => {
      console.log(res.data);
      setMovies(res.data.movies);
    });
  }, []);
  return (
    <S.Container>
      {movies.map((movie) => (
        <MovieListItem key={movie.imdbID} movie={movie} />
      ))}
    </S.Container>
  );
}

export default MovieList;
