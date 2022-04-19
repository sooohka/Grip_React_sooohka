import React from "react";
import { Movie } from "../../../../@types/movie";
import Modal from "../../../../components/Modal";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  currentMovie: Movie;
  handleLeftBtnClick: (movie: Movie) => React.MouseEventHandler<HTMLElement>;
  isFavorite: boolean;
};

const ADD_TO_FAVORITES = "즐겨찾기에 추가하시겠습니까?";
const DELETE_FROM_FAVORITES = "즐겨찾기 해제하겠습니까?";
function MovieModal(props: Props) {
  const { isOpen, isFavorite, handleClose, currentMovie, handleLeftBtnClick } =
    props;

  if (!isOpen || !currentMovie) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={currentMovie.title}
      leftButtonAttributes={{
        "aria-label": isFavorite ? "delete from favorites" : "add to favorites",
        onClick: handleLeftBtnClick(currentMovie),
      }}
      rightButtonAttributes={{
        "aria-label": "close modal",
        onClick: handleClose,
      }}
      leftButtonLabel={isFavorite ? "즐겨찾기 해제" : "즐겨찾기"}
      rightButtonLabel="취소"
      paragraph={isFavorite ? DELETE_FROM_FAVORITES : ADD_TO_FAVORITES}
    />
  );
}

export default MovieModal;
