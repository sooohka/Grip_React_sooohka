import React, { useEffect } from "react";
import { Movie } from "../../domains/search/types";
import Spinner from "../Spinner";
import MovieListItem from "./MovieListItem";
import S from "./Style";

type Props = {
  movies: Movie[];
  error?: Error | null;
  isLoading?: boolean;
  lastMovieItemEl?: React.MutableRefObject<any>;
  MovieModal: React.ReactNode;
  setCurrentMovie: (movie: Movie) => void;
  handleModalOpen: () => void;
};

function MovieList(props: Props) {
  const {
    movies,
    error,
    isLoading,
    lastMovieItemEl,
    MovieModal,
    setCurrentMovie,
    handleModalOpen,
  } = props;

  const handleItemClick = (movie: Movie) => () => {
    setCurrentMovie(movie);
    handleModalOpen();
  };

  useEffect(() => {
    if (movies.length !== 0) setCurrentMovie(movies[0]);
  }, [movies, setCurrentMovie]);

  if (error) {
    return <S.FeedBack>{error.message}</S.FeedBack>;
  }

  if (movies.length === 0 && isLoading === false) {
    return <S.FeedBack>검색 결과가 없어요😭</S.FeedBack>;
  }

  return (
    <S.MovieList>
      {MovieModal}
      {isLoading && <Spinner />}
      {movies.map((movie, i, a) => (
        <MovieListItem
          ref={a.length - 1 === i ? lastMovieItemEl : null}
          onClick={handleItemClick(movie)}
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </S.MovieList>
  );
}

export default MovieList;
