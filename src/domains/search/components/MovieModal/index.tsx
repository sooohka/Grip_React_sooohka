import React from "react";
import Modal from "../../../../components/Modal";
import { Movie } from "../../types";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  currentMovie: Movie;
  handleLeftBtnClick: (movie: Movie) => React.MouseEventHandler<HTMLElement>;
};

function MovieModal(props: Props) {
  const { isOpen, handleClose, currentMovie, handleLeftBtnClick } = props;
  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={currentMovie.title}
      leftButtonAttributes={{
        "aria-label": "add to favorite",
        onClick: handleLeftBtnClick(currentMovie),
      }}
      rightButtonAttributes={{
        "aria-label": "close modal",
        onClick: handleClose,
      }}
      leftButtonLabel="즐겨찾기"
      rightButtonLabel="취소"
      paragraph="즐겨찾기에 추가하시겠습니까?"
    />
  );
}

export default MovieModal;
