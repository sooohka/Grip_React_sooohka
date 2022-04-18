import React, { useEffect, useState } from "react";
import Spinner from "../../../../components/Spinner";
import useMovies from "../../hooks/useMovies";
import { Movie } from "../../types";
import MovieListItem from "../MovieListItem";
import MovieModal from "../MovieModal";
import S from "./Style";

type Props = {
  query: string;
};

function MovieList({ query }: Props) {
  const { movies, error, target, isLoading } = useMovies(query);
  const [currentMovie, setCurrentMovie] = useState<Movie>(movies[0]);
  const [isOpen, setIsOpen] = useState(false);
  const handleItemClick = (movie: Movie) => () => {
    setCurrentMovie(movie);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLeftBtnClick = (movie: Movie) => () => {
    console.log(movie);
  };

  useEffect(() => {
    if (movies.length !== 0) setCurrentMovie(movies[0]);
  }, [movies]);

  if (error) {
    return <S.FeedBack>{error.message}</S.FeedBack>;
  }

  if (movies.length === 0) {
    return <S.FeedBack>검색 결과가 없어요😭</S.FeedBack>;
  }

  return (
    <S.MovieList>
      {currentMovie && (
        <MovieModal
          currentMovie={currentMovie}
          isOpen={isOpen}
          handleClose={handleClose}
          handleLeftBtnClick={handleLeftBtnClick}
        />
      )}
      {isLoading && <Spinner />}
      {movies.map((movie, i, a) => (
        <MovieListItem
          ref={a.length - 1 === i ? target : null}
          onClick={handleItemClick(movie)}
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </S.MovieList>
  );
}

export default MovieList;
