import React from "react";
import Modal from "../../../../components/Modal";
import { Movie } from "../../../search/types";

type Props = {
  isOpen: boolean;
  handleClose: () => void;
  currentMovie: Movie;
  handleLeftBtnClick: (movie: Movie) => React.MouseEventHandler<HTMLElement>;
};

function FavoriteModal(props: Props) {
  const { isOpen, handleClose, currentMovie, handleLeftBtnClick } = props;
  if (!isOpen || !currentMovie) {
    return null;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={currentMovie.title}
      leftButtonAttributes={{
        "aria-label": "remove to favorite",
        onClick: handleLeftBtnClick(currentMovie),
      }}
      rightButtonAttributes={{
        "aria-label": "close modal",
        onClick: handleClose,
      }}
      leftButtonLabel="즐겨찾기 해제"
      rightButtonLabel="취소"
      paragraph="즐겨찾기에서 해제하시겠습니까?"
    />
  );
}

export default FavoriteModal;
