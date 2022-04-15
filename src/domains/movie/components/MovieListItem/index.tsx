import React from "react";
import { Movie } from "../../types";
import S from "./Style";

type Props = {
  movie: Movie;
};
function MovieListItem(props: Props) {
  const {
    movie: { poster, title, type, year },
  } = props;

  return (
    <S.Container>
      <S.Img src={poster} alt={title} />
      <S.InfoBox>
        <S.Title>{title}</S.Title>
        <S.Category>타입: {type}</S.Category>
        <b>연도: {year}</b>
      </S.InfoBox>
    </S.Container>
  );
}

export default MovieListItem;
