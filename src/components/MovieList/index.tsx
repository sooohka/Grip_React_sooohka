import React from "react";
import { Movie } from "../../@types/movie";
import Spinner from "../Spinner";
import MovieListItem from "./MovieListItem";
import S from "./Style";

type Props = {
  movies: Movie[];
  error?: Error | null;
  isLoading?: boolean;
  lastMovieItemEl?: React.MutableRefObject<any>;
  MovieModal: React.ReactNode;
  handleListItemClick: (movie: Movie) => () => void;
  handleModalOpen: () => void;
};

function MovieList(props: Props) {
  const {
    movies,
    error,
    isLoading,
    lastMovieItemEl,
    MovieModal,
    handleListItemClick,
  } = props;

  if (error) {
    return <S.FeedBack>{error.message}</S.FeedBack>;
  }

  if (movies.length === 0 && !isLoading) {
    return <S.FeedBack>결과가 없어요😭</S.FeedBack>;
  }

  return (
    <S.MovieList>
      {MovieModal}
      {isLoading && <Spinner />}
      {movies.map((movie, i, a) => (
        <MovieListItem
          ref={a.length - 1 === i ? lastMovieItemEl : null}
          onClick={handleListItemClick(movie)}
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </S.MovieList>
  );
}

export default MovieList;
