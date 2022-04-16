import React, { forwardRef } from "react";
import { Movie } from "../../types";
import S from "./Style";

type Props = {
  movie: Movie;
};

const MovieListItem = forwardRef<HTMLLIElement, Props>((props, ref) => {
  const {
    movie: { poster, title, type, year },
  } = props;

  return (
    <S.Container ref={ref}>
      <S.Img src={poster} alt={title} />
      <S.InfoBox>
        <S.Title>{title}</S.Title>
        <S.Category>타입: {type}</S.Category>
        <b>연도: {year}</b>
      </S.InfoBox>
    </S.Container>
  );
});

export default MovieListItem;
