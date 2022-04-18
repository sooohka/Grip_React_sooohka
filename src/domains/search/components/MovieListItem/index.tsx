import React, { forwardRef } from "react";
import { Movie } from "../../types";
import S from "./Style";

type Props = {
  movie: Movie;
  onClick: React.MouseEventHandler<HTMLLIElement>;
};

const MovieListItem = forwardRef<HTMLLIElement, Props>((props, ref) => {
  const {
    movie: { poster, title, type, year },
    onClick,
  } = props;

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
    </S.Container>
  );
});

export default MovieListItem;
