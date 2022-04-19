import React, { forwardRef, useMemo } from "react";
import { Movie } from "../../../@types/movie";
import useFavoritesReducer from "../../../hooks/useFavoritesReducer";
import S from "./Style";

type Props = {
  movie: Movie;
  onClick: React.MouseEventHandler<HTMLLIElement>;
};

const MovieListItem = forwardRef<HTMLLIElement, Props>((props, ref) => {
  const {
    movie: { poster, title, type, year, imdbID },
    onClick,
  } = props;

  const { favorites } = useFavoritesReducer();
  const isFavorite = useMemo(
    () => favorites.some((favorite) => imdbID === favorite.imdbID),
    [favorites, imdbID]
  );

  const handleKeyDown = (e: any) => {
    const { key } = e;
    if (key !== "enter" && key !== " ") {
      return;
    }
    e.preventDefault();
    onClick(e as any);
  };

  return (
    <S.Container
      tabIndex={0}
      aria-label={title}
      onKeyDown={handleKeyDown}
      onClick={onClick}
      ref={ref}
    >
      <S.Img src={poster} alt={title} />
      <S.InfoBox>
        <S.Title>{title}</S.Title>
        <S.Category>타입: {type}</S.Category>
        <b>연도: {year}</b>
      </S.InfoBox>
      {isFavorite && <S.HeartSolidIcon />}
    </S.Container>
  );
});

export default MovieListItem;
